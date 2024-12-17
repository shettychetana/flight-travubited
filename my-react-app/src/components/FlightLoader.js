import React from "react";
import "../styles/FlightLoader.css";

const FlightLoader = () => {
  return (
    <div className="flight-loader-container" style={{backgroundColor: "#fff"}}>
      <div className="flight-animation">
        <div className="circle-dots"></div>
        <div className="plane-icon">
          ✈
        </div>
      </div>
      <p>Just a moment, we are searching for the flights on this route.</p>
    </div>
  );
};

export default FlightLoader;
