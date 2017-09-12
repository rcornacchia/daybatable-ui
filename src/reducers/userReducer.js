import * as actions from '../authentication/actionTypes';
const token = localStorage.getItem('token') || null;
const username = localStorage.getItem('username') || null;
const userId = localStorage.getItem('userId')

const initialState = {
  loggedIn: !!username,
  username,
  userId,
  message: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      if (!action.response || !action.response.data || !action.response.data.user) {
        const { message } = action.response.data;
        return {
          ...state,
          message
        };
      }
      const { username, _id } = action.response && action.response.data && action.response.data.user;
      return {
        ...state,
        loggedIn: true,
        username,
        userId: _id,
        message: null
      }
    case actions.REGISTER_SUCCESS: {
      const { username, _id } = action.response && action.response.data && action.response.data.user;
      if (!action.response || !action.response.data || !action.response.data.user) {
        const { message } = action.response.data;
        return {
          ...state,
          message
        };
      }
      
      return {
        ...state,
        loggedIn: true,
        username,
        userId: _id,
        message: null
      }
    }
    case actions.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        username: null,
        userId: null
      }
    default:
      return state;
  }
}

export default userReducer;