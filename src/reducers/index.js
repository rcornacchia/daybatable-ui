import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from './postReducer';
import debateReducer from './debateReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    posts: postReducer,
    debate: debateReducer,
    form: formReducer,
    routing: routerReducer,
    user: userReducer
});

export default rootReducer; 