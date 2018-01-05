import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { submitPost } from './api';
import * as actions from './actionTypes';
import { trackEvent } from '../../actions';
import { get } from 'lodash';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.POST, postSaga);
  yield takeLatest(actions.POST_SUCCESS, postSuccessSaga);
}

function* postSaga({ postText }) {
  const position = yield select(state => state.posts.postFormPosition);
  const positionName = yield select(state => state.posts.postFormPositionName);
  const debateId = yield select(state => state.debate.debateId);
  const { username, userId } = yield select(state => state.user);

  yield put(trackEvent({
    category: 'Post',
    action: 'Clicked Submit Post Button'
  }));
  
  try {
    const payload = {
      username,
      userId,
      position,
      positionName,
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

function* postSuccessSaga({ response, payload }) {
  const { userId } = payload;
  console.log(response);
  
  yield put(trackEvent({
    category: 'Post',
    action: 'Submitted Post successfully'
  }));
  
  const backupId = '5a4fb80fa6c28cceadb3ef93';
  payload._id = get(response, 'data.post._id', backupId);
  payload.votes = [];

  yield put({ type: actions.POST_ADD, post: payload });
  yield put({ type: actions.POST_FORM_CLOSE });
}

export default rootSaga;