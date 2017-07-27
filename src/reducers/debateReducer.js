import { cloneDeep } from 'lodash';

const initialState = {
  debateId: null,
  topic: null,
  votesFor: [],
  votesAgainst: []
}

const debateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_SUCCESS': {
      const { _id, topic, votesFor, votesAgainst } = action.response.data.debate;
      return {
        ...state,
        debateId: _id,
        topic,
        votesFor,
        votesAgainst
      };
    }
    case 'DEBATE_UPVOTE':
      const { debateId, position, userId } = action;
      const newState = cloneDeep(state);
      const votesFor = newState.votesFor;
      const votesAgainst = newState.votesAgainst;
      let index;

      if (position === 'for') {
        // add userId to votesFor and remove from votesAgainst
        index = votesFor.findIndex(id => id === userId);
        (index < 0) ? votesFor.push(userId)
                    : votesFor.splice(index, 1);
        index = votesAgainst.findIndex(id => id === userId);
        if (index >= 0) votesAgainst.splice(index, 1);
      } else {
        // add to votesAgainst and remove from votesFor
        index = votesAgainst.findIndex(id => id === userId);
        (index < 0) ? votesAgainst.push(userId)
                    : votesAgainst.splice(index, 1);
        index = votesFor.findIndex(id => id === userId);
        if (index >= 0) votesFor.splice(index, 1);
      }
      
      return newState;
    default:
      return state;
  }
}

export default debateReducer;