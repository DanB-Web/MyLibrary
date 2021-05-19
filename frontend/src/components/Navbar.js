import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/userActions.js';

import '../styles/components/navbar.scss';

const Navbar = () => {

  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logout());
  }

  const drawerHandler = () => {
    console.log('drawer');
  }

  return (
    <div className="navbar-container">
      <div className="navbar-title">
      <i className="fas fa-book fa-3x"></i>
      <h1>MyLibrary</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Library</Link>
        <Link to="/list">Reading List</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
      </div>
      <i className="fas fa-sign-out-alt fa-2x" onClick={logOutHandler}></i>
      <i className="fas fa-bars fa-2x" onClick={drawerHandler}></i>
    </div>
  )
}

export default Navbar;
