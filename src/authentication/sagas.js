import { takeLatest } from 'redux-saga/effects';
import * as actions from './actionTypes';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.LOGOUT, logoutSaga);
}

function* logoutSaga() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
}

export default rootSaga;