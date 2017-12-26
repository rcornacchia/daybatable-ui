import React from 'react';
import styled from 'styled-components';
import Topic from '../../containers/Topic';
import Positions from '../../containers/Positions';
import Posts from '../../containers/Posts';
import PostForm from '../../containers/PostForm';

const PostsLayout = () => (
  <div className='debate-layout'>
    <Topic />
    <Positions />
    <div>
      <PostForm />
    </div>
    <div>
      <Posts position='for' />
      <Posts position='against' />
    </div>
  </div>
)

export default PostsLayout;

const ArgumentsLayout = styled.div`
  margin: 10px 5px;
  display: flex;
  justify-content: space-around
`
