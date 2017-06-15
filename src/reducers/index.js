import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import argumentsReducer from './arguments';

const rootReducer = combineReducers({
    arguments: argumentsReducer,
    form: formReducer
});

export default rootReducer;