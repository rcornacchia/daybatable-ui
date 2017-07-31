import { post } from '../../api';
import config from '../../config';

export const upvotePost = payload => {
  const url = `${config.server}/api/post/upvote`;
  return post(url, payload);
}

export const unvotePost = payload => {
  const url = `${config.server}/api/post/unvote`;
  return post(url, payload);
}