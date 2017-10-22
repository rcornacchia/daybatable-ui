import * as actions from './actionTypes';

export const trackEvent = ({ category, action, label, value }) => ({
  type: actions.TRACK_EVENT,
  category,
  action,
  label,
  value
});

export const LoadArguments = args => ({
  type: actions.LOAD_ARGUMENTS,
  args
});