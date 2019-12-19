import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import FetchUser from './components/FetchUser';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Profile from './components/Profile';
import ProfileForm from './components/ProfileForm';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';

const App = () => (
  <>
  <Navbar />
  <FetchUser>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <ProtectedRoute exact path="/:user_id/profile" component={Profile} />
      <ProtectedRoute exact path="/:user_id/profile/new" component={ProfileForm} />
      <Route component={NoMatch} /> 
    </Switch>
  </FetchUser>
  </>
);

export default App;
