import { IApiResponse } from './Api';

export interface IPosition {
  id: number;
  name: string;
}

export interface IPositionResponse extends IApiResponse {
  positions: IPosition[];
}
