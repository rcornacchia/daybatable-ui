import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actionTypes';
import { trackEvent } from '../actions';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.LOGOUT, logoutSaga);
}

function* logoutSaga() {
  yield put(trackEvent({
    category: 'User',
    action: 'Logged Out'
  }));

  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('userId');
  yield put(push('/'));
}

export default rootSaga;