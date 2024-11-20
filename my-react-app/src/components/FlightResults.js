import React, { useEffect } from 'react';

const FlightResults = ({ results }) => {
    // Log the results to the console
    useEffect(() => {
        console.log('Flight Results:', results);
    }, [results]);

    if (!results.length) return <p>No flights found.</p>;

    return (
        <div>
            <h3>Flight Results</h3>
            <ul>
                {results.map((flight, index) => (
                    <li key={index}>
                        {flight.sI.map((segment) => (
                            <div key={segment.id}>
                                <p>
                                    {segment.da.code} → {segment.aa.code}
                                </p>
                                <p>Duration: {segment.duration} mins</p>
                                <p>Stops: {segment.stops}</p>
                                <p>Departure: {segment.dt}</p>
                                <p>Arrival: {segment.at}</p>
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlightResults;
