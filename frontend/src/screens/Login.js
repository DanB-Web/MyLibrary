import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/userActions';

import { PuffLoader } from 'react-spinners';

const Login = () => {

  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails);
  const { loading, error } = userDetails;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  if (loading) {
    return <PuffLoader size={40} color={'#F5A623'}/>
  }

  if (error) {
    return <div>Something went wrong...</div>
  }

  return (
    <div>
      <form onSubmit={loginHandler}>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}></input>
        <label>Password</label>
        <input 
          type="password" 
          value={password}
          onChange={e => setPassword(e.target.value)}></input>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  )
}

export default Login
