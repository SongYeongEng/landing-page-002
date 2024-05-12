import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className="navbar-logo">
          <img className="logo-img" src={process.env.PUBLIC_URL + '/images/Logo.svg'} alt="Example" />
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}>
          <img className="burger-icon" src={process.env.PUBLIC_URL + '/images/Burger.svg'} alt="Menu" />
        </button>
        {isMenuOpen && (
          <ul className="nav-menu">
            <li className='nav-item'><a href="#">Home</a></li>
            <li className='nav-item'><a href="#">About</a></li>
            <li className='nav-item'><a href="#">Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
