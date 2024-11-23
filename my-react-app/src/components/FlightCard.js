import React from 'react';

const FlightCard = ({ flight }) => {
    return (
        <div className="flight-card">
            <div className="flight-details">
                <div className="airline-name">{flight.airline}</div>
                <div className="flight-time">
                    <p>Departure: {flight.departureTime}</p>
                    <p>Arrival: {flight.arrivalTime}</p>
                </div>
                <div className="flight-duration">
                    <p>Duration: {flight.duration}</p>
                </div>
                <div className="price">
                    <p>Price: ₹{flight.price}</p>
                </div>
                <button className="book-now-btn">Book Now</button>
            </div>
        </div>
    );
};

export default FlightCard;
