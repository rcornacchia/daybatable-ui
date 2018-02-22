import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from './postReducer';
import debateReducer from './debateReducer';
import upcomingDebatesReducer from './upcomingDebatesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  debate: debateReducer,
  upcomingDebates: upcomingDebatesReducer,
  form: formReducer,
  routing: routerReducer,
  user: userReducer,
});

export default rootReducer;