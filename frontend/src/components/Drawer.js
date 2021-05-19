import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/userActions';

const Drawer = () => {

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  }

  //PREVENTS E PROPOGATION UP TO BACKDROP
  const propHandler = (e) => {
    if (e.target.localName !== 'a') {
      e.stopPropagation();
    }
  }

  return (
    <div className="drawer-container" 
         onClick={(e) =>propHandler(e)} 
         style={{animation: 'slideIn 1s forwards'}}>
      <div className="drawer-links">
        <Link to="/">Library</Link>
        <Link to="/list">Reading List</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
      </div>
      <i className="fas fa-sign-out-alt fa-2x" onClick={logoutHandler}></i>
    </div>
  )
}

export default Drawer
