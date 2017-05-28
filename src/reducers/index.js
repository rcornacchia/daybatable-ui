import { combineReducers } from 'redux';
import argumentsReducer from './arguments';

const rootReducer = combineReducers({
    argumentsReducer,
})

export default rootReducer;