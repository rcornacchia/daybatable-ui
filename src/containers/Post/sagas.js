import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { submitPost, upvotePost } from './api';
import * as actions from './actionTypes';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.POST, postSaga);
  yield takeLatest(actions.POST_SUCCESS, postSuccessSaga);
  yield takeLatest(actions.POST_UPVOTE, upvoteSaga);
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
    const response = yield call(submitPost, payload);
    yield put({ type: actions.POST_SUCCESS, response, payload });
  }
  catch (e) {
    yield put({ type: actions.POST_FAIL });
  }
}

function* postSuccessSaga({ payload }) {
  yield put(push('/'));
  payload._id = String(Date.now()); // give the payload a temporary _id
  payload.votes = 0;
  console.log(payload);

  yield put({ type: actions.POST_ADD, post: payload });
}

function* upvoteSaga(action) {
  try {
    console.log(action);
    yield call(upvotePost, action.post);
    yield put({ type: actions.POST_UPVOTE_SUCCESS, response });
  } catch (e) {
    yield put({ type: actions.POST_UPVOTE_FAIL })
  }
}

export default rootSaga;