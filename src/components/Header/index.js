import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import './Header.scss';

class Header extends Component {
  render() {
    const { logout, user } = this.props;
    const { username } = user;

    let navRight = (
      <div>
        <Link to='/post' className='link right-link'>Post Argument</Link>
        <a className='link right-link'
          onClick={logout}>Logout</a>
        <span className='link right-link'>{username}</span>
      </div>
    );

    if (!user.loggedIn) {
      navRight = (
        <div>
          <Link to='/login' className='link right-link'>Login</Link>
          <Link to='/register' className='link right-link'>Register</Link>
        </div>
      );
    }
    
    return (
      <div className='header-container'>
        <div className='navbar'>
          <Link to='/' className='link'>Daybatable</Link>
          <div className='debate-topic'>
            The chicken came before the egg.
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
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: 'LOGOUT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);