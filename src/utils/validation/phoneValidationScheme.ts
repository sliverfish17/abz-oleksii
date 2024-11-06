import { PHONE_REGEXP } from 'utils/regexp';
import * as yup from 'yup';

export const phoneValidationScheme = yup
  .string()
  .required('Phone number is required')
  .transform((value) => value.replace(/\D/g, ''))
  .matches(PHONE_REGEXP, 'Phone number must start with +380 and be followed by 9 digits');
