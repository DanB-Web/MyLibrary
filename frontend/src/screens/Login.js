import React, { useState } from 'react';
import { login } from '../utils/rest.js'

const Login = ({ setAuth }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (e) => {
    e.preventDefault();
    const reply = await login(email, password);
    console.log(reply);
    if (reply.data.userAuth) {
      setAuth(true)
    }
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
