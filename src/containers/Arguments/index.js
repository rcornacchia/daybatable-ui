import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post';
import './Posts.scss';

class Posts extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps){
      this.props = null;
      this.props = nextProps;
    }
  }

  render() {
    const { position, args } = this.props;
    
    return (
      <div className='Posts'>
        <div className='position'>
          <h2>{position}</h2>
        </div>
        {
          !!args && Object.keys(args).map((arg, i) => {
            return <Post key={`${position}-${i}`} arg={args[arg]} position={position} />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    args: state.posts[props.position]
  }
}

export default connect(mapStateToProps)(Posts);