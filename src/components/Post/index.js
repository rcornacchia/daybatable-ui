import React, { Component } from 'react';
import './Post.scss';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: this.props.arg.votes
        };
        this.incrementVote = this.incrementVote.bind(this);
    }

    incrementVote() {
        this.setState({
            votes: this.state.votes + 1
        });
    }

    render() {
        const { position, arg } = this.props;

        return (
            <div className={`post ${position}`}>
                <a className='vote-btn' onClick={this.incrementVote}>+</a>
                <p className="post-body votes">{this.state.votes}</p>
                <p className="post-body">{arg.post}</p>
            </div>
        )
    }
}

export default Post;
