import React from 'react'
import { Link, } from 'react-router-dom';
import { Header, Menu,  } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Menu.Item as={Link} to="/">Home</Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item as={Link} to="/register">Register</Menu.Item>
      <Menu.Item as={Link} to="/login">Login</Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;