import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import jwt from 'jsonwebtoken';
import './Header.scss';

const Header = () => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  let navRight = (
    <div>
      <Link to='/post' className='link right-link'>Post Argument</Link>
      <span className='link right-link'>{username}</span>
    </div>
  );

  if (!token) {
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

export default Header;