import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import loginSaga from '../containers/Login/sagas';
import registerSaga from '../containers/Register/sagas';
import authenticationSaga from '../authentication/sagas';
import postsSaga from '../containers/Posts/sagas';
import postFormSaga from '../containers/PostForm/sagas';
import initSaga from '../sagas';
import DevTools from '../containers/DevTools';
import { history } from '../';
import { syncHistory, syncParams} from 'react-router-redux-params';
import { browserHistory } from 'react-router';

const sagaMiddleware = createSagaMiddleware();
const routingMiddleware = routerMiddleware(browserHistory)

const enhancer = compose(
  applyMiddleware(
    sagaMiddleware,
    routingMiddleware,
    syncHistory(browserHistory)),
  DevTools.instrument()
);

function* rootSaga() {
  yield [
    fork(loginSaga),
    fork(registerSaga),
    fork(authenticationSaga),
    fork(postFormSaga),
    fork(postsSaga),
    fork(initSaga)
  ];
}

export default function configureStore() {
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
}