import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import ReactGA from 'react-ga';
import * as actions from './actionTypes';
import { login } from './api';
import { trackEvent } from '../../actions';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.LOGIN, loginSaga);
  yield takeLatest(actions.LOGIN_SUCCESS, loginSuccessSaga);
}

function* loginSaga() {
  const payload = yield select(state => state.form.login.values);
  yield put(trackEvent({
    category: 'User',
    action: 'Clicked Login Button'
  }));
  try {
    const response = yield call(login, payload);
    yield put({ type: actions.LOGIN_SUCCESS, response });
  } catch (error) {
    yield put({ type: actions.LOGIN_FAIL, error });
  }
}

function* loginSuccessSaga(action) {
  const { data } = action.response;
  
  yield put(trackEvent({
    category: 'User',
    action: 'Logged in Successfully'
  }));

  if (data && data.user) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.user.username);
    localStorage.setItem('userId', data.user._id);
    ReactGA.set({ userId: data.user.username });
    yield put(push('/'));
  }
}

export default rootSaga;