import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { upvotePost, unvotePost,  } from './actions';
import { notify } from 'react-notify-toast';
import CrunchyButton from '../../components/CrunchyButton';
import './Posts.scss';

class Posts extends Component {
  render() {
    if (!this.props.posts) return false;
    const { position, posts, upvotePost, unvotePost, userId, debate } = this.props;
    const sortedPosts = Object.keys(posts).map(id => posts[id]);
    sortedPosts.sort((a, b) => b.votes.length - a.votes.length);

    return (
      <div className='Posts'>
        {
          !!posts && sortedPosts.map((post, i) => {
            return (
              <Post key={`${position}-${i}`} 
                post={post} 
                position={position}
                upvote={upvotePost}
                unvote={unvotePost}
                userId={userId}
              />
            );
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts[props.position],
  userId: state.user.userId,
  debate: state.debate
});

const mapDispatchToProps = dispatch => ({
  upvotePost: data => dispatch(upvotePost(data)),
  unvotePost: data => dispatch(unvotePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);