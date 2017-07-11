import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import argumentsReducer from './arguments';
import debateReducer from './debate';
import userReducer from './user';

const rootReducer = combineReducers({
    arguments: argumentsReducer,
    debate: debateReducer,
    form: formReducer,
    routing: routerReducer,
    user: userReducer
});

export default rootReducer; 