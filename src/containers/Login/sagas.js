import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actionTypes';
import { login } from './api';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.LOGIN, loginSaga);
}

function* loginSaga() {
  try {
    yield call(login);
    yield put({ type: actions.LOGIN_SUCCESS });
  } catch (e) {
    yield put({ type: actions.LOGIN_FAIL, error: e });
  }
}

export default rootSaga;