import { useState } from 'react';
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './FileUpload.module.scss';

interface IFileUploadProps {
  label: string;
  error?: string;
  register: UseFormRegisterReturn;
  multiple?: boolean;
  accept?: InputHTMLAttributes<HTMLInputElement>['accept'];
}

export const FileUpload = ({
  label,
  error,
  register,
  multiple = false,
  accept = 'image/jpeg,image/jpg',
}: IFileUploadProps) => {
  const [fileName, setFileName] = useState(label);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
    }
    register.onChange({
      target: {
        name: register.name,
        value: files,
      },
    } as unknown as Event);
  };

  return (
    <div className={styles.input__wrapper}>
      <input
        className={styles.input}
        type="file"
        multiple={multiple}
        accept={accept}
        id={register.name}
        {...register}
        onChange={handleFileChange}
      />
      <button
        className={`${styles.input__button} ${error ? styles.input__button_error : ''}`}
        type="button"
        onClick={() => document.getElementById(register.name)?.click()}
      >
        Upload
      </button>
      <label
        htmlFor={register.name}
        className={`${styles.input__label} ${error ? styles.input__label_error : ''}`}
      >
        {fileName}
      </label>
      {error && <p className={styles.input__error}>{error}</p>}
    </div>
  );
};
