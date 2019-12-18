import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import FetchUser from './components/FetchUser';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Register from './components/Register';

const App = () => (
  <>
  <Navbar />
  <FetchUser>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route component={NoMatch} /> 
    </Switch>
  </FetchUser>
  </>
);

export default App;
