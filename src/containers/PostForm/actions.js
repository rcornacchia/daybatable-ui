import * as actions from './actionTypes';

export const post = () => ({ type: actions.POST });

export const openPostForm = position => ({
  type: actions.POST_FORM_OPEN,
  position
});

export const closePostForm = position => ({
  type: actions.POST_FORM_CLOSE,
  position
});

export const setPostFormPosition = position => ({
  type: actions.POST_FORM_SET_POSITION,
  position
})