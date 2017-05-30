import { combineReducers } from 'redux';
import argumentsReducer from './arguments';

const rootReducer = combineReducers({
    arguments: argumentsReducer,
})

export default rootReducer;