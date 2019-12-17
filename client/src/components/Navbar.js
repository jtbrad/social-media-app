import React from 'react'
import { Link, } from 'react-router-dom';
import { Header, Menu,  } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Menu.Item as={Link} to="/">Home</Menu.Item>
  </Menu>
);

export default Navbar;