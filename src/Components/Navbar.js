import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar"> 
      <Logo className="navbar-logo" alt="Logo" />
      <div className="navbar-list">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
