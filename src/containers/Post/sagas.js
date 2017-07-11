import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { submitPost } from './api';
import * as actions from './actionTypes';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.POST, postSaga);
  yield takeLatest(actions.POST_SUCCESS, postSuccessSaga);
}

function* postSaga() {
  try {
    const data = yield select(state => state.form.post.values);
    const response = yield call(submitPost, data);
    yield put({ type: actions.POST_SUCCESS, response });
  }
  catch (e) {
    yield put({ type: actions.POST_FAIL });
  }
}

function* postSuccessSaga() {
  yield put(push('/'));
}

export default rootSaga;