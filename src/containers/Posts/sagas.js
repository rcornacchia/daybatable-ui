import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { upvotePost, unvotePost } from './api';
import * as actions from './actionTypes';
import { trackEvent } from '../../actions';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.POST_UPVOTE, upvoteSaga);
  yield takeLatest(actions.POST_UNVOTE, postUnvoteSaga);
}

function* upvoteSaga({ payload }) {
  yield put(trackEvent({
    category: 'Post',
    action: 'Upvoted a post'
  }));

  try {
    const response = yield call(upvotePost, payload);
    yield put({ type: actions.POST_UPVOTE_SUCCESS, response });
  } catch (e) {
    yield put({ type: actions.POST_UPVOTE_FAIL, e })
  }
}

function* postUnvoteSaga({ payload }) {
  yield put(trackEvent({
    category: 'Post',
    action: 'Unvoted a post'
  }));

  try {
    const response = yield call(unvotePost, payload);
    yield put({ type: actions.POST_UNVOTE_SUCCESS, response });
  } catch (e) {
    yield put({ type: actions.POST_UNVOTE_FAIL, e });
  }
}

export default rootSaga;