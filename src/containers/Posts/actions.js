import * as actions from '../PostForm/actionTypes';

export const upvotePost = payload => ({
  type: actions.POST_UPVOTE,
  payload
});

export const upvoteDebate = (debateId, position) => ({
  type: actions.DEBATE_UPVOTE,
  debateId,
  position
});