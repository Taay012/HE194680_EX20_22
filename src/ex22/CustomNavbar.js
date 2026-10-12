import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function CustomNavbar() {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/ex22">Logo</NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem><NavLink tag={Link} to="/ex22">Home</NavLink></NavItem>
        <NavItem><NavLink tag={Link} to="/ex22/about">About</NavLink></NavItem>
        <NavItem><NavLink tag={Link} to="/ex22/contact">Contact</NavLink></NavItem>
      </Nav>
    </Navbar>
  );
}
