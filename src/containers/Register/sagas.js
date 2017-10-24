import { takeLatest, select, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actionTypes';
import { registe } from './api';
import { trackEvent } from '../../actions';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.REGISTER, registerSaga);
  yield takeLatest(actions.REGISTER_SUCCESS, registerSuccessSaga);
}

function* registerSaga() {
  const payload = yield select(state => state.form.register.values);
  yield put(trackEvent({
    category: 'User',
    action: 'Clicked Register Button'
  })); 
  
  try {
    const response = yield call(register, payload);
    yield put({ type: actions.REGISTER_SUCCESS, response });
  } catch (error) {
    yield put({ type: actions.REGISTER_FAIL, error });
  }
}

function* registerSuccessSaga(action) {
  const { data } = action.response;
  yield put(trackEvent({
    category: 'User',
    action: 'Registered Successfully'
  }));

  if (data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.user.username);
    localStorage.setItem('userId', data.user._id);
    yield put(push('/'));
  }
}

export default rootSaga;