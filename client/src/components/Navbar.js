import React, { useContext, } from 'react'
import { Link, withRouter, } from 'react-router-dom';
import { Menu,  } from 'semantic-ui-react';
import { AuthContext, } from '../providers/AuthProvider';

const Navbar = (props) => {
  const auth = useContext(AuthContext);
  
  return (
    <Menu>
      <Menu.Item as={Link} to="/">Home</Menu.Item>
      <Menu.Menu position="right">
        {
          auth.user ?
          <Menu.Item onClick={ () => auth.handleLogout(props.history) }>Logout</Menu.Item>
          :
          <>
            <Menu.Item as={Link} to="/register">Register</Menu.Item>
            <Menu.Item as={Link} to="/login">Login</Menu.Item>
          </>
        }
      </Menu.Menu>
    </Menu>
  );
};


export default withRouter(Navbar);