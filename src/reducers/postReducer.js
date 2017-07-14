import { cloneDeep } from 'lodash';
import * as actions from '../containers/Post/actionTypes';

const initialState = {
  for: null,
  against: null
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_SUCCESS': {
      const { posts } = action.response.data;
      let allPosts = { 
        for: {},
        against: {}
      };
      posts && posts.map(post => addPost(post, allPosts));

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
      const { _id, position } = action.post;
      if (_id && position) allPosts[position][_id].votes += 1;
      
      return {
        ...state,
        ...allPosts
      };
    }
    default:
      return state;
  }
}

const addPost = (post, allPosts) => {
  (post.position === 'for') ? allPosts.for[post._id] = post
                            : allPosts.against[post._id] = post;
}

export default postReducer;