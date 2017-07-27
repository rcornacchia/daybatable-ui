import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { submitPost, upvotePost, unvotePost } from './api';
import * as actions from './actionTypes';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.POST, postSaga);
  yield takeLatest(actions.POST_SUCCESS, postSuccessSaga);
  yield takeLatest(actions.POST_UPVOTE, upvoteSaga);
  yield takeLatest(actions.POST_UNVOTE, postUnvoteSaga);
}

function* postSaga() {
  const formData = yield select(state => state.form.post.values);
  const debateId = yield select(state => state.debate.debateId);
  try {
    const { username, userId } = yield select(state => state.user);
    const { position, post } = formData;
    const payload = {
      username,
      userId,
      position,
      post,
      debateId
    };
    console.log(userId);
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

function* upvoteSaga(action) {
  try {
    const response = yield call(upvotePost, action.payload);
    yield put({ type: actions.POST_UPVOTE_SUCCESS, response });
  } catch (e) {
    yield put({ type: actions.POST_UPVOTE_FAIL, e })
  }
}

function* postUnvoteSaga({ payload }) {
  try {
    const response = yield call(unvotePost, action.payload);
    yield put({ type: actions.POST_UNVOTE_SUCCESS, response });
  } catch (e) {
    yield put({ type: actions.POST_UNVOTE_FAIL, e });
  }
}

export default rootSaga;