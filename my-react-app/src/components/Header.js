// src/components/Header.js
import React from "react";
import "./../styles/Header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="/images/logo.jpeg"
          alt="TravUnited Logo"
          className="header-logo"
        />
        {/* <h1 className="header-title">TRAVUNITED</h1> */}
        <p className="header-subtitle">LIVE LOVE EXPLORE</p>
      </div>
      <nav className="header-nav">
        <a href="#flights" className="nav-link">FLIGHTS</a>
        <a href="#visa" className="nav-link">VISA</a>
        <a href="#hotels" className="nav-link">HOTELS</a>
        <a href="#holidays" className="nav-link">HOLIDAYS</a>
      </nav>
      <div className="header-right">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="social-icon fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="social-icon fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="social-icon fab fa-twitter"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="social-icon fab fa-youtube"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
