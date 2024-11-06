import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FileUpload, Input, RadioButton } from 'components';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { registerUser } from 'services/registerUser';
import { IApiResponse, IPosition, IRegistrationFormInputs, ITokenResponse } from 'types';
import { httpClient } from 'utils/http-client';
import { registrationSchema } from 'utils/validation';

import styles from './Registration.module.scss';

interface RegistrationFormProps {
  positions: IPosition[];
  setIsSuccess: (success: boolean) => void;
  triggerRefetch: () => void;
}

export const RegistrationForm = ({
  positions,
  setIsSuccess,
  triggerRefetch,
}: RegistrationFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    reset,
    formState: { errors, touchedFields },
    watch,
  } = useForm<IRegistrationFormInputs>({
    defaultValues: { name: '', email: '', phone: '', position_id: positions[0]?.id, photo: null },
    resolver: yupResolver<IRegistrationFormInputs>(registrationSchema),
    mode: 'onChange',
  });

  const positionId = Number(watch('position_id'));

  const onSubmit = async (data: IRegistrationFormInputs) => {
    try {
      const { token } = await httpClient.get<ITokenResponse>('/token');
      const response = await registerUser({ ...data, phone: `+${data.phone}` }, token);

      if (response.success) {
        triggerRefetch();
        setIsSuccess(true);
        reset();
        setValue('position_id', positions[0].id);
      } else if (response.fails) {
        Object.keys(response.fails).forEach((field) => {
          setError(field as keyof IRegistrationFormInputs, {
            type: 'manual',
            message: response?.fails?.[field][0],
          });
        });
      }
    } catch (error) {
      const { message } = error as IApiResponse;
      toast.error(message ?? 'Something went wrong');
      console.error('Error during registration:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.registration__form}>
      <div className={styles.registration__formInputs}>
        <Input
          register={register('name')}
          type="text"
          label="Your name"
          error={(touchedFields.name && errors.name?.message) || ''}
        />
        <Input
          register={register('email')}
          type="email"
          label="Email"
          error={(touchedFields.email && errors.email?.message) || ''}
        />
        <Input
          register={register('phone')}
          type="tel"
          label="Phone"
          helperText="+38 (XXX) XXX - XX - XX"
          error={(touchedFields.phone && errors.phone?.message) || ''}
          mask="+38 (999) 999 - 99 - 99"
        />
      </div>
      <div className={styles.registration__positions}>
        <p className={styles.registration__positionsHeading}>Select your position</p>
        {positions.map((position) => (
          <RadioButton
            register={register('position_id')}
            label={position.name}
            value={position.id}
            key={position.id}
            error={errors.position_id?.message}
            selected={positionId}
          />
        ))}
      </div>
      <FileUpload
        register={register('photo')}
        label="Upload your photo"
        error={errors.photo?.message || ''}
      />
      <Button type="submit" className={styles.registration__submit}>
        Sign Up
      </Button>
    </form>
  );
};
