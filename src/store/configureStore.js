import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import loginSaga from '../containers/Login/sagas';
import argumentsReducer from '../reducers/arguments';
import DevTools from '../containers/DevTools';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument()
);

const initialState = { 
  for: [],
  against: [],
};

export default function configureStore() {
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(loginSaga);

  return store;
}