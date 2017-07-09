import { post } from '../../api';
import config from '../../config';

export function submitPost(body) {
  const url = `${config.server}/api/post`;
  return post(url, body);
}