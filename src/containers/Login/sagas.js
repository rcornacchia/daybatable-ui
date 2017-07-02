import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actionTypes';
import { login } from './api';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.LOGIN, loginSaga);
  yield takeLatest(actions.LOGIN_SUCCESS, loginSuccessSaga);
}

function* loginSaga() {
  try {
    const data = yield select(state => state.form.login.values);
    const { username, password } = data;
    const response = yield call(login, username, password);
    yield put({ type: actions.LOGIN_SUCCESS, response });
  } catch (e) {
    yield put({ type: actions.LOGIN_FAIL, error: e });
  }
}

function* loginSuccessSaga(action) {
  const { data } = action.response;

  if (data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.user.username);
  }
}

export default rootSaga;