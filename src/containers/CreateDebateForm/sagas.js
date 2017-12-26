import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actionTypes';
import { trackEvent } from '../../actions';
import { createDebate } from './api';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.CREATE_DEBATE, createDebateSaga);
  yield takeLatest(actions.CREATE_DEBATE_SUCCESS, createDebateSuccessSaga);
}

function* createDebateSaga() {
  const payload = yield select(state => state.form.createDebate.values);
  const userId = yield select(state => state.user.userId);
  
  yield put(trackEvent({
    category: 'Debate',
    action: 'Submitted debate'
  }));

  try {
    const response = yield call(createDebate, { ...payload, userId });
    yield put({ type: actions.CREATE_DEBATE_SUCCESS, response});
  } catch (error) {
    yield put({ type: actions.CREATE_DEBATE_FAIL, error });
  }
}

function* createDebateSuccessSaga() {
  yield put(trackEvent({
    category: 'Debate',
    action: 'Submitted debate successfully'
  }));
}

export default rootSaga;