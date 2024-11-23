// src/components/Promo.js
import React from "react";
import "../styles/Promo.css"; // CSS for the promo section

const Promo = () => {
  return (
    <div className="container" id="promo-section">
      <div className="promo-card d-flex flex-row bg-light justify-content-between align-items-center">
        {/* Left Section: Promo Text */}
        <div className="d-flex flex-column col p-0 promo-text">
          <span className="font-weight-bold d-block mb-2 promo-title">
            Special Offers for You!
          </span>
          <span className="d-inline-block">
            Enjoy up to 50% off on flights to your favorite destinations. 
            <br />
            Book now and save big!
          </span>
        </div>

        {/* Right Section: Promo Image */}
        <div className="promo-image">
          <img
            src="//via.placeholder.com/250x150"
            alt="Special Offer"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Promo;
