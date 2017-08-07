import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { submitPost } from './api';
import * as actions from './actionTypes';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.POST, postSaga);
  yield takeLatest(actions.POST_SUCCESS, postSuccessSaga);
}

function* postSaga() {
  const formData = yield select(state => state.form.post.values);
  const debateId = yield select(state => state.debate.debateId);
  console.log(debateId);
  try {
    const { username, userId } = yield select(state => state.user);
    const { position, postText } = formData;
    const payload = {
      username,
      userId,
      position,
      postText,
      debateId
    };
    const response = yield call(submitPost, payload);
    yield put({ type: actions.POST_SUCCESS, response, payload });
  }
  catch (e) {
    yield put({ type: actions.POST_FAIL, e });
  }
}

function* postSuccessSaga({ payload }) {
  const { userId } = payload;
  payload._id = String(Date.now()); // give the payload a temporary _id
  payload.votes = [userId];

  yield put(push('/'));
  yield put({ type: actions.POST_ADD, post: payload });
}

export default rootSaga;