import * as actions from './actionTypes';

export const upvotePost = payload => ({
  type: actions.POST_UPVOTE,
  payload
});

export const unvotePost = payload => ({
  type: actions.POST_UNVOTE,
  payload
})

export const upvoteDebate = (debateId, position, userId) => ({
  type: 'DEBATE_UPVOTE',
  debateId,
  position,
  userId
});