import * as yup from 'yup';

import { emailValidationScheme } from './emailValidationScheme';
import { fileValidationSchema } from './fileValidationScheme';
import { phoneValidationScheme } from './phoneValidationScheme';
import { positionValidationScheme } from './positionValidationScheme';
import { userNameValidationScheme } from './userNameValidationScheme';

export const registrationSchema = yup.object().shape({
  name: userNameValidationScheme,
  email: emailValidationScheme,
  phone: phoneValidationScheme,
  position_id: positionValidationScheme,
  photo: fileValidationSchema,
});
