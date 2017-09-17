import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import UserDropDown from './UserDropDown';
import './Header.scss';

class Header extends Component {
  render() {
    const { logout, user } = this.props;
    const { username } = user;

    let navRight = (
      <div>
        <Link to='/about' className='link right-link'>
          <FlatButton label='About' />
        </Link>
        <Link to='/post' className='link right-link'>
          <FlatButton label='Post Argument' />
        </Link>
        <UserDropDown username={username} logout={logout}/>
      </div>
    );

    if (!user.loggedIn) {
      navRight = (
        <div>
          <Link to='/about' className='link right-link'>
            <FlatButton label='About' />
          </Link>
          <Link to='/login' className='link right-link'>
            <FlatButton label='Login' />
          </Link>
          <Link to='/register' className='link right-link'>
            <FlatButton label='Register' />
          </Link>
        </div>
      );
    }
    
    return (
      <div className='header-container'>
        <div className='navbar'>
          <Link to='/' className='link'>
            <FlatButton label='Daybatable' />
          </Link>
          <div className='navbar-right'>
            {navRight}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: 'LOGOUT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);