import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import argumentsReducer from '../reducers/arguments';
import DevTools from '../containers/DevTools';

const enhancer = compose(
    DevTools.instrument()
);

const initialState = { 
    forArgs: [],
    againstArgs: [],
};

export default function configureStore() {
    const store = createStore(argumentsReducer, initialState, enhancer);

    return store;
}