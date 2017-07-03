import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import argumentsReducer from './arguments';
import userReducer from './user';

const rootReducer = combineReducers({
    arguments: argumentsReducer,
    user: userReducer,
    form: formReducer,
    routing: routerReducer
});

export default rootReducer; 