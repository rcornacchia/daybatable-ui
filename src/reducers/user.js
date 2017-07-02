import * as actions from '../authentication/actionTypes';
const token = localStorage.getItem('token') || null;
const username = localStorage.getItem('username') || null;

const initialState = {
  loggedIn: !!username,
  username
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      const { username } = action.response.data.user;

      return {
        loggedIn: true,
        username
      }
    case actions.LOGOUT:
      return {
        loggedIn: false,
        username: null
      }
    default:
      return state;
  }
}

export default userReducer;