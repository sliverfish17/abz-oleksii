import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import InputMask from 'react-input-mask';

import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: string;
  register?: UseFormRegisterReturn<string>;
  mask?: string;
  name: string;
}

export const Input = ({ label, helperText, error, name, register, mask }: IInputProps) => (
  <div className={styles.input}>
    <div className={`${styles.input__wrapper} ${error ? styles.input__wrapperError : ''}`}>
      {mask ? (
        <InputMask
          id={name}
          mask={mask}
          placeholder=" "
          className={`${styles.input__field} ${error ? styles.input__fieldError : ''}`}
          {...register}
        />
      ) : (
        <input
          {...register}
          id={name}
          placeholder=" "
          className={`${styles.input__field} ${error ? styles.input__fieldError : ''}`}
        />
      )}
      <label
        htmlFor={name}
        className={`${styles.input__label} ${error ? styles.input__labelError : ''}`}
      >
        {label}
      </label>
    </div>
    {helperText && !error && <p className={styles.input__helper}>{helperText}</p>}
    {error && <p className={styles.input__error}>{error}</p>}
  </div>
);
