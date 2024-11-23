import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/FlightResults.css'; // Import the custom styles

const FlightResults = () => {
    const location = useLocation();
    const results = location.state?.results || []; // Access the results passed via state

    // Initialize filters for airline and price
    const [filteredResults, setFilteredResults] = useState(results);
    const [airlineFilter, setAirlineFilter] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);

    // Update filtered results based on the selected filters
    useEffect(() => {
        let filtered = results;

        if (airlineFilter) {
            filtered = filtered.filter((result) =>
                result.sI[0].fD.aI.code === airlineFilter
            );
        }

        // Filter by price range
        filtered = filtered.filter((result) => {
            const price = result.totalPriceList[0].fd.ADULT.fC.TF;
            return price >= minPrice && price <= maxPrice;
        });

        setFilteredResults(filtered);
    }, [airlineFilter, minPrice, maxPrice, results]);

    // Airline logos dictionary
    const airlineLogos = {
        AI: '/AirlinesLogo/AI.png', // Air India
        '6E': '/AirlinesLogo/6E.png', // Indigo
        SG: '/AirlinesLogo/SG.png', // SpiceJet
    };

    return (
        <div className="flight-results-container">
            <div className="sidebar">
                <h3>Filters</h3>
                <div className="filter">
                    <label>Airline</label>
                    <select
                        value={airlineFilter}
                        onChange={(e) => setAirlineFilter(e.target.value)}
                    >
                        <option value="">All Airlines</option>
                        <option value="AI">Air India</option>
                        <option value="6E">Indigo</option>
                        <option value="SG">SpiceJet</option>
                    </select>
                </div>

                <div className="filter">
                    <label>Price Range</label>
                    <div className="range-container">
                        <input
                            type="range"
                            min="0"
                            max="20000"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="price-range"
                        />
                        <span>₹{minPrice}</span>
                        <input
                            type="range"
                            min="0"
                            max="20000"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="price-range"
                        />
                        <span>₹{maxPrice}</span>
                    </div>
                    <div>
                        <strong>Price Range:</strong> ₹{minPrice} - ₹{maxPrice}
                    </div>
                </div>
            </div>

            <div className="flight-list">
                {filteredResults.length > 0 ? (
                    filteredResults.map((result, index) => (
                        <div key={index} className="flight-card">
                            <div className="flight-header">
                                <div className="flight-logo">
                                    <img
                                        src={airlineLogos[result.sI[0].fD.aI.code] || '/AirlinesLogo/default-logo.png'}
                                        alt={`${result.sI[0].fD.aI.name} logo`}
                                    />
                                </div>
                                <div className="flight-info">
                                    <div className="flight-name">{result.sI[0].fD.aI.name}</div>
                                    <div className="flight-duration">
                                        {`${Math.floor(result.sI[0].duration / 60)}h ${result.sI[0].duration % 60}m`}
                                    </div>
                                </div>
                            </div>
                            <div className="flight-row">
                                <div className="flight-detail">
                                    <strong>From:</strong> {result.sI[0].da.name}
                                </div>
                                <div className="flight-detail">
                                    <strong>To:</strong> {result.sI[0].aa.name}
                                </div>
                                <div className="flight-detail">
                                    <strong>Departure Time:</strong> {new Date(result.sI[0].dt).toLocaleString()}
                                </div>
                            </div>
                            <div className="flight-price">
                                <strong>Price:</strong> ₹{result.totalPriceList[0].fd.ADULT.fC.TF}
                            </div>
                            <button className="book-btn">Book Now</button>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default FlightResults;
