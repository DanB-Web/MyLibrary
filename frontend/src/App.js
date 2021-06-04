import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import Login from './screens/Login';
import Library from './screens/Library';
import ReadingList from './screens/ReadingList';
import Profile from './screens/Profile';
import Admin from './screens/Admin';

import Backdrop from './components/Backdrop';

import 'normalize.css';
import './App.scss';

const App = () => {

  const userDetails = useSelector(state => state.userDetails);
  const { userAuth } = userDetails;

 //const [mode, setMode] = useState('light');
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  }

  if (!userAuth) {
    return (
      <div className="Login-Page">
        <Login></Login>
      </div>
    );
  }

  return (
    <Router>
      <div className="Main-App">
      {drawer && <Backdrop drawer={drawer} toggleDrawer={toggleDrawer}/> 
        }
        <Navbar toggleDrawer={toggleDrawer}></Navbar>
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
