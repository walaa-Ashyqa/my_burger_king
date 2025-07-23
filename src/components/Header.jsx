import React from 'react';
import './Header.css';
import { logo_1, logo_2, search } from '../assets';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo_2} alt="Burger King Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-button">
          <img src={search} alt="Search" />
        </button>
      </div>
    </header>
  );
}

export default Header;