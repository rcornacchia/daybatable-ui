import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Arguments.css';
import Argument from '../../components/Argument/Argument';

class Arguments extends Component {
  render() {
    const { position, args } = this.props;
    console.log(this.props);
    // args.sort(args.votes);

    return (
      <div className='Arguments'>
        <div className="position">
          <h2>{position}</h2>
        </div>
        {
          !!args && args.map((arg, i) => {
            return <Argument key={`forArg_${i}`} arg={arg} position={position}></Argument>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    args: state.arguments[props.position]
  }
}

export default connect(mapStateToProps)(Arguments);