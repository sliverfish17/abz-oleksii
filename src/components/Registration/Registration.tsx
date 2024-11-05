import { Button, Input } from 'components';
import { Heading } from 'components/Heading/Heading';
import { FormProvider, useForm } from 'react-hook-form';
import { EMAIL_REGEXP, PHONE_REGEXP } from 'utils/regexp';

import styles from './Registration.module.scss';

interface IFormInputs {
  userName: string;
  email: string;
  phone: string;
}

export const Registration = () => {
  const methods = useForm<IFormInputs>({
    defaultValues: {
      userName: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = (data: IFormInputs) => {
    console.log('Submitted data:', data);
  };

  return (
    <section className={styles.registration} id="sign-up">
      <Heading className={styles.registration__heading}>Working with POST request</Heading>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.registration__form}>
          <Input
            name="userName"
            type="text"
            label="Your name"
            validationRules={{
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters long',
              },
              maxLength: {
                value: 60,
                message: 'Name cannot be longer than 60 characters',
              },
            }}
          />
          <Input
            name="email"
            type="email"
            label="Email"
            validationRules={{
              required: 'Email is required',
              pattern: {
                value: EMAIL_REGEXP,
                message: 'Invalid email address',
              },
            }}
          />
          <Input
            name="phone"
            type="tel"
            label="Phone"
            helperText="+38 (XXX) XXX - XX - XX"
            validationRules={{
              required: 'Phone number is required',
              pattern: {
                value: PHONE_REGEXP,
                message: 'Phone number must start with +380 and be followed by 9 digits',
              },
            }}
          />
          <Button type="submit" className={styles.registration__submit}>
            Sign Up
          </Button>
        </form>
      </FormProvider>
    </section>
  );
};
