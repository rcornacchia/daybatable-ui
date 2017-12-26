import { post } from '../../api';
import config from '../../config';

export const createDebate = payload => {
  const url = `${config.server}/api/debate/create`;
  return post(url, payload);
}