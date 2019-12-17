import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';

const App = () => (
  <>
  <Navbar />
  <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} /> 
  </Switch>
  </>
);

export default App;
