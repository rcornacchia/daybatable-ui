import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import './Header.scss';

class Header extends Component {
  render() {
    const { logout, user, debate } = this.props;
    const { username } = user;
    const { topic } = debate;

    let navRight = (
      <div>
        <Link to='/post' className='link right-link'>
          <RaisedButton label="Post Argument" />
        </Link>
        <a className='link right-link' onClick={logout}>
          <RaisedButton label="Logout" />
        </a>
        <span className='link right-link'>{username}</span>
      </div>
    );

    if (!user.loggedIn) {
      navRight = (
        <div>
          <Link to='/login' className='link right-link'>
            <RaisedButton label="Login" />
          </Link>
          <Link to='/register' className='link right-link'>
            <RaisedButton label="Register" />
          </Link>
        </div>
      );
    }
    
    return (
      <div className='header-container'>
        <div className='navbar'>
          <Link to='/' className='link'>Daybatable</Link>
          <div className='debate-topic'>
            {topic}
          </div>
          <div className='navbar-right'>
            {navRight}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    debate: state.debate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: 'LOGOUT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);