// src/components/Banner.js
import React from "react";
import "../styles/Banner.css"; // CSS file for styling the banner

const Banner = () => {
  return (
    <div className="container" id="srt-banner">
      <div className="srt-banner-white d-flex flex-row bg-white justify-content-between align-items-center">
        {/* Left Section: Contact Information */}
        <div className="d-flex flex-column col p-0">
          <span className="font-weight-bold d-block mb-2 srt-callus">
            Call us 24/7 at{" "}
            <a href="tel:000-800-050-3540" className="phonenoLink">
              <span className="global-phoneno font-weight-bold">
                000-800-050-3540
              </span>
            </a>
          </span>
          <span className="d-inline-block">
            Need help booking? Our agents are ready!
            <br />
            Choose from over 500 airlines.
          </span>
        </div>

        {/* Right Section: Airline Logos */}
        <div className="d-flex flex-row justify-content-around col p-0 text-center srt-logo">
          <div className="col p-0 border-right">
            <img
              src="//c.fareportal.com/gcms/portals/2/gcmsfiles/live/images/srt-ha.webp"
              alt="Hawaiian Airlines"
              width="132"
              height="56"
              className="mb-2"
            />
            <p className="m-0">Hawaiian Airlines</p>
          </div>
          <div className="col p-0 border-right">
            <img
              src="//c.fareportal.com/gcms/portals/2/gcmsfiles/live/images/srt-b6.webp"
              alt="JetBlue Airways"
              width="132"
              height="56"
              className="mb-2"
            />
            <p className="m-0">JetBlue Airways</p>
          </div>
          <div className="col p-0">
            <img
              src="//c.fareportal.com/gcms/portals/2/gcmsfiles/live/images/srt-tk.webp"
              alt="Turkish Airlines"
              width="132"
              height="56"
              className="mb-2"
            />
            <p className="m-0">Turkish Airlines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
