import * as actions from '../PostForm/actionTypes';

export const upvotePost = payload => ({
  type: actions.POST_UPVOTE,
  payload
});

export const unvotePost = payload => ({
  type: actions.POST_UNVOTE,
  payload
})

export const upvoteDebate = (debateId, position, userId) => ({
  type: actions.DEBATE_UPVOTE,
  debateId,
  position,
  userId
});