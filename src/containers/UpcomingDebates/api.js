import { get, post } from '../../api';
import config from '../../config';

export const getUpcomingDebates = () => get(`${config.server}/api/debate/upcoming`);
export const voteUpcomingDebate = payload => post(`${config.server}/api/debate/vote`, payload);