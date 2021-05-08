import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Navbar from './components/Navbar.js';
import Login from './screens/Login';
import Library from './screens/Library';
import ReadingList from './screens/ReadingList';
import Profile from './screens/Profile';
import Admin from './screens/Admin';

import './App.css';

const App = () => {

  const userDetails = useSelector(state => state.userDetails);
  const { userAuth } = userDetails;

  if (!userAuth) {
    return (
      <div className="Login-Page">
        <Navbar userAuth={userAuth}></Navbar>
        <Login></Login>
      </div>
    );
  }

  return (
    <Router>
      <div className="Main-App">
        <Navbar userAuth={userAuth}></Navbar>
        <Switch>
          <Route path="/" exact component={Library}></Route>
          <Route path="/list" exact component={ReadingList}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  )
  
}

export default App;
