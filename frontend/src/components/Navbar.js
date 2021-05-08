import React from 'react';

import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/userActions.js'

const Navbar = ({ userAuth }) => {

  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logout());
  }

  return (
    <div>
      <h1>Navbar</h1>
      {userAuth && <button onClick={logOutHandler}>Log Out</button>}
    </div>
  )
}

export default Navbar;
