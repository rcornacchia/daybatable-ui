import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import jwt from 'jsonwebtoken';
import './Header.scss';

function isAuthenticated() {
  const token = localStorage.getItem('token');
  // return jwt.check(token, (isValid, err) => {
    if (token) return true;
    return false;
  // });
}

const Header = () => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  let navRight = <div>{username}</div>;
  if (!token) {
    navRight = (
      <div>
        <Link to='/login' className='link auth-link'>Login</Link>
        <Link to='/register' className='link auth-link'>Register</Link>
      </div>
    );
  }
  
  return (
    <div className='header-container'>
      <div className='navbar'>
        <Link to='/' className='link'>Daybatable</Link>
        <div className='navbar-right'>
          {navRight}
        </div>
      </div>
    </div>
  );
}

export default Header;