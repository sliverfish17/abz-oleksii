import * as yup from 'yup';

export const positionValidationScheme = yup.number().required('Position is required');
