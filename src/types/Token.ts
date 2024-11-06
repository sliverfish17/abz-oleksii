import { IApiResponse } from './Api';

export interface ITokenResponse extends IApiResponse {
  token: string;
}
