import React from 'react';
import Posts from '../containers/Posts';

const PostsLayout = () => (
  <div className='arguments-layout'>
    <Posts position='for' />
    <Posts position='against' />
  </div>
)

export default PostsLayout;