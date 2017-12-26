import React from 'react';
import styled from 'styled-components';
import Posts from '../../containers/Posts';
import Topic from '../../containers/Topic';
import PostForm from '../../containers/PostForm';

const PostsLayout = () => (
  <div className='debate-layout'>
    <Topic />
    <ArgumentsLayout className='arguments-layout'>
      <Posts position='for' />
      <Posts position='against' />
    </ArgumentsLayout>
    <PostForm />
  </div>
)

export default PostsLayout;

const ArgumentsLayout = styled.div`
  margin: 10px 5px;
  display: flex;
  justify-content: space-around
`

