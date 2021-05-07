import React, { useState } from 'react';
import Login from './screens/Login';
import Library from './screens/Library';

import './App.css';

const App = () => {

  const [auth, setAuth] = useState(false);


  if (!auth) {
    return (
      <div className="App">
        <Login setAuth={setAuth}></Login>
      </div>
    );
  }

  return (
      <div className="App">
        <Library></Library>
      </div>
  )
  
}

export default App;
