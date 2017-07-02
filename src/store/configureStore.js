import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import loginSaga from '../containers/Login/sagas';
import authenticationSaga from '../authentication/sagas';
import DevTools from '../containers/DevTools';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument()
);

export default function configureStore() {
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(loginSaga);
  sagaMiddleware.run(authenticationSaga);

  return store;
}