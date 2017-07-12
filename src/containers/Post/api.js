import { post } from '../../api';
import config from '../../config';

export function submitPost(body) {
  const url = `${config.server}/api/post/create`;
  return post(url, body);
}