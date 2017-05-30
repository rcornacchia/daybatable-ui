import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import argumentsReducer from '../reducers/arguments';
import DevTools from '../containers/DevTools';

const enhancer = compose(
    DevTools.instrument()
);

const initialState = { 
    for: [],
    against: [],
};

export default function configureStore() {
    const store = createStore(rootReducer, enhancer);

    return store;
}