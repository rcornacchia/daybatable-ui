import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Topic from '../../containers/Topic';
import Positions from '../../containers/Positions';
import Posts from '../../containers/Posts';
import PostForm from '../../containers/PostForm';

const PostsLayout = ({ postFormActive }) => (
  <PostsLayoutContainer>
    <Topic />
    <Positions />
    { postFormActive && <PostForm /> }
    <div>
      <Posts position='for' />
      <Posts position='against' />
    </div>
  </PostsLayoutContainer>
)

const mapStateToProps = (state, props) => ({
  postFormActive: state.posts.postFormActive
})

export default connect(mapStateToProps)(PostsLayout);

const PostsLayoutContainer = styled.div`
  min-width: 816px;
`