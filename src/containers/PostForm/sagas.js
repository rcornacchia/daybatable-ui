import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { submitPost } from './api';
import * as actions from './actionTypes';
import { trackEvent } from '../../actions';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.POST, postSaga);
  yield takeLatest(actions.POST_SUCCESS, postSuccessSaga);
}

function* postSaga() {
  const position = yield select(state => state.posts.postFormPosition);
  const formData = yield select(state => state.form.post.values);
  const debateId = yield select(state => state.debate.debateId);
  const { username, userId } = yield select(state => state.user);
  const { postText } = formData;

  yield put(trackEvent({
    category: 'Post',
    action: 'Clicked Submit Post Button'
  }));
  
  try {
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

function* postSuccessSaga({ response, payload }) {
  const { userId } = payload;
  
  yield put(trackEvent({
    category: 'Post',
    action: 'Submitted Post successfully'
  }));
  
  payload._id = String(Date.now()); // give the payload a temporary _id
  payload.votes = [];

  yield put({ type: actions.POST_ADD, post: payload });
  yield put({ type: actions.POST_FORM_CLOSE });
}

export default rootSaga;