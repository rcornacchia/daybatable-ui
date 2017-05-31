import React, { Component } from 'react';
import './Argument.scss';

class Argument extends Component {
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
            <div className={`argument ${position}`}>
                <a className='vote-btn' onClick={this.incrementVote}>+</a>
                <p className="argument-body votes">{this.state.votes}</p>
                <p className="argument-body">{arg.text}</p>
            </div>
        )
    }
}

export default Argument;
