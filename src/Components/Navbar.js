import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className="navbar-logo">
        <a href="/">Logo</a>
        </div>
        <ul className='nav-menu'>
          <li className='nav-item'><a href="#">Home</a></li>
          <li className='nav-item'><a href="#">About</a></li>
          <li className='nav-item'><a href="#">Contact</a></li>
        </ul>
        </div>
    </nav>
  );
}

export default Navbar;
