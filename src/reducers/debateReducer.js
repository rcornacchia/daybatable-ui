import { cloneDeep } from 'lodash';
import * as actions from '../actionTypes';

const initialState = {
  debateId: null,
  topic: null,
  votesFor: [],
  votesAgainst: [],
  forPosition: null,
  againstPosition: null
}

const debateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INIT_SUCCESS: {
      const { _id, topic, votesFor, votesAgainst, forPosition, againstPosition } = action.response.data.debate;
      return {
        ...state,
        debateId: _id,
        topic,
        votesFor,
        votesAgainst,
        forPosition,
        againstPosition
      };
    }
    case actions.DEBATE_UPVOTE: {
      const { debateId, position, userId } = action;
      const newState = cloneDeep(state);
      const votesFor = newState.votesFor;
      const votesAgainst = newState.votesAgainst;
      let index;

      if (position === 'for') {
        // add userId to votesFor and remove from votesAgainst
        index = votesFor.findIndex(id => id === userId);
        if (index < 0) {
          votesFor.push(userId)
        }
        index = votesAgainst.findIndex(id => id === userId);
        if (index >= 0) votesAgainst.splice(index, 1);
      } else {
        // add to votesAgainst and remove from votesFor
        index = votesAgainst.findIndex(id => id === userId);
        if (index < 0) {
          votesAgainst.push(userId)
        }
        index = votesFor.findIndex(id => id === userId);
        if (index >= 0) votesFor.splice(index, 1);
      }
      return newState;
    }
    case actions.DEBATE_DOWNVOTE: {
      const { debateId, position, userId } = action;
      const newState = cloneDeep(state);
      const votesFor = newState.votesFor;
      const votesAgainst = newState.votesAgainst;

      if (position === 'for') {
        // add userId to votesFor and remove from votesAgainst
        let index = votesFor.findIndex(id => id === userId);
        if (index > -1) {
          votesFor.splice(index, 1);
        }
      } else {
        // add to votesAgainst and remove from votesFor
        let index = votesAgainst.findIndex(id => id === userId);
        if (index > -1) {
          votesAgainst.splice(index, 1);
        }
      }
      return newState;
    }
    default:
      return state;
  }
}

export default debateReducer;