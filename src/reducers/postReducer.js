import * as postFormactions from '../containers/PostForm/actionTypes';
import * as postActions from '../containers/Posts/actionTypes';
import { cloneDeep } from 'lodash';

const actions = { ...postFormactions, ...postActions };

const initialState = {
  for: null,
  against: null,
  postFormActive: false,
  postFormPosition: null
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_SUCCESS': {
      const { posts, debate } = action.response.data;
      const { forPosition, againstPosition } = debate;
      const allPosts = { 
        for: {},
        against: {}
      };
      posts && posts.map(post => addPost(post, allPosts, forPosition, againstPosition));

      return {
        ...state,
        ...allPosts
      }
    }
    case actions.POST_ADD: {
      const { post } = action;
      const allPosts = cloneDeep(state);
      post && addPost(post, allPosts);

      return {
        ...state,
        ...allPosts
      };
    }
    case actions.POST_UPVOTE: {
      const allPosts = cloneDeep(state);
      const { userId, post } = action.payload;
      const { _id, position } = post;

      if (_id && position && userId) {
        if (!allPosts[position][_id].votes.find(id => id === userId)) {
          allPosts[position][_id].votes.push(userId);
        }
      }
      
      return {
        ...state,
        ...allPosts
      };
    }
    case actions.POST_UNVOTE: {
      const allPosts = cloneDeep(state);
      const { userId, post } = action.payload;
      const { _id, position } = post;

      if (_id && position && userId) {
        const votes = allPosts[position][_id].votes;
        const index = votes.indexOf(userId);
        if (index >= 0) votes.splice(index, 1);
      }
      return {
        ...state,
        ...allPosts
      }
    }
    case actions.POST_FORM_OPEN: {
      return {
        ...state,
        postFormActive: true,
        postFormPosition: action.position
      }
    }
    case actions.POST_FORM_CLOSE: {
      return {
        ...state,
        postFormActive: false,
        postFormPosition: null
      }
    }
    case actions.POST_FORM_SET_POSITION: {
      return {
        ...state,
        postFormPosition: action.position
      }
    }
    default:
      return state;
  }
}

const addPost = (post, allPosts, forPosition, againstPosition) => {
  (post.position == forPosition) ? allPosts.for[post._id] = post
                                 : allPosts.against[post._id] = post;
}

export default postReducer;