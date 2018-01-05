import * as actions from './actionTypes';

export const post = postText => ({ type: actions.POST, postText });

export const openPostForm = (position, positionName) => ({
  type: actions.POST_FORM_OPEN,
  position,
  positionName
});

export const closePostForm = position => ({
  type: actions.POST_FORM_CLOSE,
  position
});

export const setPostFormPosition = (position, positionName) => ({
  type: actions.POST_FORM_SET_POSITION,
  position,
  positionName
})