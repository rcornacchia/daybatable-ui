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
    const formData = yield select(state => state.form.post.values);
    const debateId = yield select(state => state.debate.debateId);
    const { username, userId } = yield select(state => state.user);
    const { position, post } = formData;

    const payload = {
      username,
      userId,
      position,
      post,
      debateId
    };
    console.log(payload);
    
    const response = yield call(submitPost, payload);
    yield put({ type: actions.POST_SUCCESS, response, payload });
  }
  catch (e) {
    yield put({ type: actions.POST_FAIL });
  }
}

function* postSuccessSaga({ payload }) {
  yield put(push('/'));
  // just give the payload a temporary _id
  payload._id = String(Date.now());
  payload.votes = 0;
  console.log(payload);

  yield put({ type: 'ADD_POST', post: payload });
}

export default rootSaga;