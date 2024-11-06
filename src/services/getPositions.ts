import { IPositionResponse } from 'types/Position';
import { httpClient } from 'utils/http-client';

export const getPositions = async () => {
  const { positions } = await httpClient.get<IPositionResponse>('/positions');
  return positions;
};
