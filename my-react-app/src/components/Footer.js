import React from "react";
import "../styles/Footer.css"; // Import custom CSS

const Footer = () => {
  return (
    <footer>
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h3>Subscribe and get exclusive deals & offer</h3>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your mail"
            aria-label="Email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Footer Content */}
      <div className="footer-container">
        <div className="footer-row">
          {/* Logo and Tagline */}
          <div className="footer-col">
            <img
              src="logo.png"
              alt="TravUnited Logo"
              className="footer-logo"
            />
            <p>Book your trip in minutes, get full control for much longer.</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Links - Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Logistic</a>
              </li>
              <li>
                <a href="#">Privacy & Policy</a>
              </li>
            </ul>
          </div>

          {/* Links - Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#">Help/FAQ</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
            </ul>
          </div>

          {/* Links - More */}
          <div className="footer-col">
            <h4>More</h4>
            <ul>
              <li>
                <a href="#">Press Centre</a>
              </li>
              <li>
                <a href="#">Our Blog</a>
              </li>
              <li>
                <a href="#">Low fare tips</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>Copyright, TravUnited 2024. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Corporate Deals</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
