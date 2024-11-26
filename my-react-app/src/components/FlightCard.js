import React from 'react';

const FlightCard = ({ flight }) => {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                {/* Airline Name */}
                <h5 className="card-title text-primary">{flight.airline}</h5>

                {/* Flight Times */}
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className="mb-1"><strong>Departure:</strong> {flight.departureTime}</p>
                        <p><strong>Arrival:</strong> {flight.arrivalTime}</p>
                    </div>
                    <div>
                        <p><strong>Duration:</strong> {flight.duration}</p>
                    </div>
                </div>

                {/* Price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <h6 className="text-success">Price: ₹{flight.price}</h6>
                    <button className="btn btn-primary btn-sm">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;
