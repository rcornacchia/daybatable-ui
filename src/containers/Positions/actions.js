export const upvoteDebate = (debateId, position, userId) => ({
  type: 'DEBATE_UPVOTE',
  debateId,
  position,
  userId
});