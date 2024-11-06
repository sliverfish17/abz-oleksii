import { EMAIL_REGEXP } from 'utils/regexp';
import * as yup from 'yup';

export const emailValidationScheme = yup
  .string()
  .required('Email is required')
  .matches(EMAIL_REGEXP, 'Invalid email address');
