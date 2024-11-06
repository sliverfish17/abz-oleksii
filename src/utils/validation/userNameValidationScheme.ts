import * as yup from 'yup';

export const userNameValidationScheme = yup
  .string()
  .required('Name is required')
  .min(2, 'Name must be at least 2 characters long')
  .max(60, 'Name cannot be longer than 60 characters');
