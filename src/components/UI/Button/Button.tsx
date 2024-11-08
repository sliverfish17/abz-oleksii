import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = ({ children, className = '', onClick, disabled, type }: IButton) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
