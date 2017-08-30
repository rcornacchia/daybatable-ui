import React from 'react';
import Posts from '../../containers/Posts';
import Topic from '../../containers/Topic';
import './PostsLayout.scss';

const PostsLayout = () => (
  <div className='debate-layout'>
    <Topic />
    <div className='arguments-layout'>
      <Posts position='for' />
      <Posts position='against' />
    </div>
  </div>
)

export default PostsLayout;