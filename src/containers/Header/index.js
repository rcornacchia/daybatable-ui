import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import UserDropDown from './UserDropDown';
import icon from '../../../assets/favicon.png';
import './Header.scss';

class Header extends Component {
  render() {
    const { logout, user } = this.props;
    const { username } = user;

    let navRight = (
      <div>
        <Link to='/about' className='link right-link'>
          <Button>About</ Button>
        </Link>
        <Link to='/post' className='link right-link'>
          <Button>Post Argument</ Button>
        </Link>
        <UserDropDown username={username} logout={logout}/>
      </div>
    );

    if (!user.loggedIn) {
      navRight = (
        <div>
          <Link to='/about' className='link right-link'>
            <Button>About</ Button>
          </Link>
          <Link to='/login' className='link right-link'>
            <Button>Login</ Button>
          </Link>
          <Link to='/register' className='link right-link'>
            <Button>Register</ Button>
          </Link>
        </div>
      );
    }
    
    return (
      <div className='header-container'>
        <div className='navbar'>
          <Link to='/' className='link'>
            <Button>
              {<img src={icon} className='header-icon'/>}
              Daybatable
            </ Button>
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

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'LOGOUT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);