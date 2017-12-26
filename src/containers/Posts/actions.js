import * as actions from './actionTypes';

export const upvotePost = payload => ({
  type: actions.POST_UPVOTE,
  payload
});

export const unvotePost = payload => ({
  type: actions.POST_UNVOTE,
  payload
})