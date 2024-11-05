import { RegisterOptions, useFormContext } from 'react-hook-form';

import styles from './Input.module.scss';

interface IInputProps {
  name: string;
  type: string;
  label: string;
  helperText?: string;
  validationRules?: RegisterOptions;
}

export const Input = ({ name, type, label, helperText, validationRules }: IInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.input}>
      <div
        className={`${styles.input__wrapper} ${
          errors[name] ? styles['input__wrapper--error'] : ''
        }`}
      >
        <input
          {...register(name, validationRules)}
          type={type}
          id={name}
          placeholder=" "
          className={`${styles.input__field} ${errors[name] ? styles['input__input--error'] : ''}`}
        />
        <label htmlFor={name} className={styles.input__label}>
          {label}
        </label>
      </div>
      {helperText && !errors[name] && <p className={styles.input__helper}>{helperText}</p>}
      {errors[name] && <p className={styles.input__error}>{errors[name]?.message?.toString()}</p>}
    </div>
  );
};

export default Input;
