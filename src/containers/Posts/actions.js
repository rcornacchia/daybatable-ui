import * as actions from '../Post/actionTypes';

export const upvote = post => ({
  type: actions.POST_UPVOTE,
  post
})