import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './RadioButton.module.scss';

interface RadioButtonProps {
  label: string;
  value: number | string;
  register?: UseFormRegisterReturn<string>;
  error?: string;
  selected: number;
}

export const RadioButton = ({ label, value, register, error, selected }: RadioButtonProps) => (
  <label className={styles.radioLabel}>
    <input
      type="radio"
      value={value}
      {...register}
      className={styles.radioInput}
      checked={value === selected}
    />
    <span className={styles.radioCustom}></span>
    {label}
    {error && <p className={styles.radioError}>{error}</p>}
  </label>
);
