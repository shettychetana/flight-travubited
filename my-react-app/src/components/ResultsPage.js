import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
    const location = useLocation();
    const flightResults = location.state?.results || []; // Access the passed data

    return (
        <div>
            <h1>Flight Search Results</h1>
            {flightResults.length > 0 ? (
                <ul>
                    {flightResults.map((flight, index) => (
                        <li key={index}>
                            <p>Airline: {flight.airlineName}</p>
                            <p>Price: {flight.price}</p>
                            <p>Departure: {flight.departureTime}</p>
                            <p>Arrival: {flight.arrivalTime}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default ResultsPage;
