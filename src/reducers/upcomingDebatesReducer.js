import { cloneDeep } from 'lodash';
import * as actions from '../containers/UpcomingDebates/actionTypes';

const getInitialState = {
  debates: []
}

const reducer = (state = getInitialState, action) => {
  switch (action.type) {
    case actions.GET_UPCOMING_DEBATES_SUCCESS: {
      const { response } = action;
      const debates = response && response.data && response.data.debates || [];
      return {
        ...state,
        debates,
      }
    }
    case actions.VOTE_UPCOMING_DEBATE_SUCCESS: {
      const { payload: { userId, debateId } } = action;
      const debates = cloneDeep(state.debates);
      const debate = debates.find(debate => debate._id == debateId);
      const votes = debate.votes || [];
      const index = votes.findIndex(id => id == userId);
      (index < 0) ? votes.push(userId)
                  : votes.splice(index, 1);
      console.log(debate);
      return {
        ...state,
        debates
      }
    }
    default:
      return state;
  }
}

export default reducer;