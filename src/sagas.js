import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from './actionTypes';
import { init, upvoteDebate } from './api';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.INIT, initSaga);
  yield takeLatest('DEBATE_UPVOTE', debateUpvoteSaga);
}

function* initSaga() {
  try {
    const response = yield call(init);
    if (response.data.success && response.data.debate) {
      yield put({ type: actions.INIT_SUCCESS, response });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({ type: actions.INIT_FAIL, error });
  }
}

function* debateUpvoteSaga({ userId, debateId, position }) {
  const payload = { userId, debateId, position };
  try {
    const response = yield call(upvoteDebate, payload);
    yield put({ type: 'DEBATE_UPVOTE_SUCCESS', response });
  } catch (error) {
    yield put({ type: 'DEBATE_UPVOTE_FAIL', error });
  }
}

export default rootSaga;