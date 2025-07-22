// src/components/Header.js
import React from 'react';
import './Header.css'; // Make sure this CSS file exists in the same directory
import { logo_1,logo_2, search } from '../assets';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* Using Link for logo to navigate to home */}
        <Link to="/">
          {/* Replace '/path-to-your-burger-king-logo.png' with the actual path to your logo file */}
          <img src={logo_2} alt="Burger King Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          {/* These links would typically use React Router's <Link> component for SPA navigation */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        {/* You'll need a search icon here. If using Font Awesome, ensure it's imported. */}
        {/* Otherwise, use an SVG or another icon library */}
        <button className="search-button">
          <img src={search} alt="" srcset="" /> {/* Example: Font Awesome search icon */}
        </button>
      </div>
    </header>
  );
}

export default Header;