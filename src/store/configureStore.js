import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import loginSaga from '../containers/Login/sagas';
import registerSaga from '../containers/Register/sagas';
import authenticationSaga from '../authentication/sagas';
import postsSaga from '../containers/Posts/sagas';
import postFormSaga from '../containers/PostForm/sagas';
import rootSaga from '../sagas';
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

export default function configureStore() {
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(loginSaga);
  sagaMiddleware.run(registerSaga);
  sagaMiddleware.run(authenticationSaga);
  sagaMiddleware.run(postFormSaga);
  sagaMiddleware.run(postsSaga);
  sagaMiddleware.run(rootSaga);

  return store;
}