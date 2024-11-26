import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#ffffff", color: "#000000" }} className="pt-5">
      {/* Newsletter Section */}
      <div className="text-center py-3 bg-light">
  <h3>Subscribe and get exclusive deals & offer</h3>
  <form className="row justify-content-center align-items-center mt-3">
    {/* Email Input */}
    <div className="col-md-6 mb-2 mb-md-0">
      <input
        type="email"
        className="form-control"
        placeholder="Enter your mail"
        aria-label="Email"
        required
      />
    </div>

    {/* Subscribe Button */}
    <div className="col-md-auto">
      <button type="submit" className="btn btn-dark w-100">
        Subscribe
      </button>
    </div>
  </form>
</div>

      {/* Footer Content */}
      <div className="container py-5">
        <div className="row">
          {/* Logo and Tagline */}
          <div className="col-md-3">
            <img
              src="logo.png"
              alt="TravUnited Logo"
              className="img-fluid mb-3"
            />
            <p>Book your trip in minutes, get full control for much longer.</p>
            <div className="d-flex">
              <a
                href="#"
                className="text-dark me-3 fs-5"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-dark me-3 fs-5" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-dark fs-5"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Links - Company */}
          <div className="col-md-3">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Logistic
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Links - Contact */}
          <div className="col-md-3">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Help/FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>

          {/* Links - More */}
          <div className="col-md-3">
            <h4>More</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Press Centre
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Low fare tips
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="mb-2">Copyright, TravUnited 2024. All rights reserved.</p>
          <div>
            <a href="#" className="text-dark text-decoration-none me-3">
              Corporate Deals
            </a>
            <a href="#" className="text-dark text-decoration-none">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
