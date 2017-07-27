import * as actions from '../authentication/actionTypes';
const token = localStorage.getItem('token') || null;
const username = localStorage.getItem('username') || null;
const userId = localStorage.getItem('userId')

const initialState = {
  loggedIn: !!username,
  username,
  userId
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      const { username, _id } = action.response.data.user;
      return {
        loggedIn: true,
        username,
        userId: _id
      }
    case actions.LOGOUT:
      return {
        loggedIn: false,
        username: null,
        userId: null
      }
    default:
      return state;
  }
}

export default userReducer;