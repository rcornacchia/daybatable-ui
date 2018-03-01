export const upvoteDebate = (debateId, position, userId) => ({
  type: 'DEBATE_UPVOTE',
  debateId,
  position,
  userId
});

export const downvoteDebate = (debateId, position, userId) => ({
  type: 'DEBATE_DOWNVOTE',
  debateId,
  position,
  userId
});