import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actionTypes';
import { login } from './api';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.LOGIN, loginSaga);
  yield takeLatest(actions.LOGIN_SUCCESS, loginSuccessSaga);
}

function* loginSaga() {
  const payload = yield select(state => state.form.login.values);
  try {
    const response = yield call(login, payload);
    yield put({ type: actions.LOGIN_SUCCESS, response });
  } catch (error) {
    yield put({ type: actions.LOGIN_FAIL, error });
  }
}

function* loginSuccessSaga(action) {
  const { data } = action.response;

  if (data && data.user) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.user.username);
    localStorage.setItem('userId', data.user._id);
    yield put(push('/'));
  }
}

export default rootSaga;