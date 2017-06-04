import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <Link to='/' className='link'>Daybatable</Link>
      <div className='auth-links'>
        <Link to='/login' className='link auth-link'>Login</Link>
        <Link to='register' className='link auth-link'>Register</Link>
      </div>
    </div>
  );
}

export default Header;