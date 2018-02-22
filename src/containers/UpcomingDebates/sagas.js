import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  GET_UPCOMING_DEBATES,
  GET_UPCOMING_DEBATES_SUCCESS,
  GET_UPCOMING_DEBATES_FAIL,
  VOTE_UPCOMING_DEBATE,
  VOTE_UPCOMING_DEBATE_SUCCESS,
  VOTE_UPCOMING_DEBATE_FAIL
} from './actionTypes';
import { getUpcomingDebates, voteUpcomingDebate } from './api';

const rootSaga = function* rootSaga() {
  yield takeLatest(GET_UPCOMING_DEBATES, getUpcomingDebatesSaga)
  yield takeLatest(VOTE_UPCOMING_DEBATE, voteUpcomingDebateSaga)
}

function* getUpcomingDebatesSaga() {
  try {
    const response = yield call(getUpcomingDebates);
    yield put({ type: GET_UPCOMING_DEBATES_SUCCESS, response });
  } catch (e) {
    yield put({ type: GET_UPCOMING_DEBATES_FAIL, e });
  }
}

function* voteUpcomingDebateSaga({ debateId }) {
  const userId = yield select(state => state.user.userId);

  try {
    const payload = { debateId, userId };
    const response = yield call(voteUpcomingDebate, payload);
    yield put({ type: VOTE_UPCOMING_DEBATE_SUCCESS, response, payload });
  } catch (e) {
    yield put({ type: VOTE_UPCOMING_DEBATE_FAIL, e });
  }
}

export default rootSaga;