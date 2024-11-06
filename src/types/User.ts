import { IApiResponse } from './Api';

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: string;
}

export interface IUserRegistration extends IApiResponse {
  user_id?: number;
  message: string;
  fails?: {
    [key: string]: string[];
  };
}
