const initialState = {
  debateId: null,
  topic: null,
  votesFor: null,
  votesAgainst: null,
}

const debateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_SUCCESS':
      const { _id, topic, votesFor, votesAgainst } = action.response.data.debate;
      return {
        ...state,
        debateId: _id,
        topic,
        votesFor,
        votesAgainst
      };
    default:
      return state;
  }
}

export default debateReducer;