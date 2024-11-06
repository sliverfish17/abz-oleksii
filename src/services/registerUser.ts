import { IRegistrationFormInputs } from 'types/Form';
import { IUserRegistration } from 'types/User';
import { httpClient } from 'utils/http-client';

export const registerUser = async (
  data: IRegistrationFormInputs,
  token: string,
): Promise<IUserRegistration> => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  formData.append('position_id', data.position_id?.toString() || '');
  if (data.photo && data.photo[0]) {
    formData.append('photo', data.photo[0]);
  }

  return await httpClient.postForm<IUserRegistration>('/users', formData, token);
};
