import { takeLatest, select, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actionTypes';
import { register } from './api';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.REGISTER, registerSaga);
  yield takeLatest(actions.REGISTER_SUCCESS, registerSuccessSaga);
}

function* registerSaga() {
  const payload = yield select(state => state.form.register.values);
  console.log(payload);
  console.log('test');
  try {
    const response = yield call(register, payload);
    yield put({ type: actions.REGISTER_SUCCESS, response });
  } catch (error) {
    yield put({ type: actions.REGISTER_FAIL, error });
  }
}

function* registerSuccessSaga(action) {
  yield put(push('/'));
}

export default rootSaga;