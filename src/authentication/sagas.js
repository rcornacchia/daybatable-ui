import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actionTypes';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.LOGOUT, logoutSaga);
}

function* logoutSaga() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('userId');
  yield put(push('/'));
}

export default rootSaga;