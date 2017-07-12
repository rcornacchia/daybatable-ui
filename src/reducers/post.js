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
    case 'ADD_POST': {
      const { post } = action;
      const allPosts = { ...state };
      post && addPost(post, allPosts);

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