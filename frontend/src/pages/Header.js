import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="left-section">
        <NavLink to="/">
<img src="/assets/logo.jpg" alt="Interconnections Logo" className="logo" />
        </NavLink>
      </div>
      <div className="center-section">
        <span className="company-name">Interkonnection</span>
      </div>
      <div className="right-section">
        <div className="hamburger-menu" onClick={toggleMenu} role="button" tabIndex={0} aria-label="Toggle menu" onKeyPress={(e) => { if (e.key === 'Enter') toggleMenu(); }}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {menuOpen && (
          <div className="side-menu">
            <button className="close-button" onClick={() => setMenuOpen(false)} aria-label="Close menu">&times;</button>
            <nav className="menu-links">
              <NavLink to="/" className="menu-item" onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/Director" className="menu-item" onClick={() => setMenuOpen(false)}>Director</NavLink>
              <NavLink to="/Contacts" className="menu-item" onClick={() => setMenuOpen(false)}>ContactUs</NavLink>
              <NavLink to="/AbousUs" className="menu-item" onClick={() => setMenuOpen(false)}>AboutUs</NavLink>
              <NavLink to="/Stuff" className="menu-item" onClick={() => setMenuOpen(false)}>Staff</NavLink>
              <NavLink to="/Services" className="menu-item" onClick={() => setMenuOpen(false)}>Services</NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

