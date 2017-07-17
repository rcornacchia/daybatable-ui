import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { upvote } from './actions';
import './Posts.scss';

class Posts extends Component {
  render() {
    const { position, posts, upvote, userId } = this.props;
    
    return (
      <div className='Posts'>
        <div className='position'>
          <h2>{position}</h2>
        </div>
        {
          !!posts && Object.keys(posts).map((post, i) => {
            return (
              <Post key={`${position}-${i}`} 
                post={posts[post]} 
                position={position}
                upvote={upvote}
                userId={userId}/>
            );
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    posts: state.posts[props.position],
    userId: state.user.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upvote: (data) => dispatch(upvote(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);