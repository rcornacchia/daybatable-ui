import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import UserDropDown from './UserDropDown';
import './Header.scss';

class Header extends Component {
  render() {
    const { logout, user } = this.props;
    const { username } = user;

    let navRight = (
      <div>
        <Link to='/post' className='link right-link'>
          <RaisedButton label="Post Argument" />
        </Link>
        <UserDropDown username={username} logout={logout}/>
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
          <Link to='/' className='link'>
            <RaisedButton label="Daybatable" />
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