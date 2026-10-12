import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationMenu() {
  return (
    <nav className="example-menu" aria-label="Ex20 navigation">
      <Link to="/ex20">Home</Link>
      <Link to="/ex20/products">Products</Link>
      <Link to="/ex20/about">About</Link>
      <Link to="/ex20/contact">Contact</Link>
      <Link to="/ex20/users">User Profile</Link>
    </nav>
  );
}
