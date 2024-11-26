import React, { useState } from 'react';
import '../styles/FilterSidebar.css'; // Custom styles for the sidebar

const FilterSidebar = ({
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    airlineFilter,
    setAirlineFilter,
    tripFilter,
    setTripFilter,
}) => {
    const [showPrice, setShowPrice] = useState(true);
    const [showTime, setShowTime] = useState(true);
    const [showRating, setShowRating] = useState(true);
    const [showAirlines, setShowAirlines] = useState(true);
    const [showTrips, setShowTrips] = useState(true);

    const toggleSection = (sectionSetter) => {
        sectionSetter((prevState) => !prevState);
    };

    return (
        <div className="filter-sidebar">
            <h3>Filters</h3>

            {/* Price Section */}
            <div className="filter-section">
                <div
                    className="filter-header"
                    onClick={() => toggleSection(setShowPrice)}
                >
                    <span>Price</span>
                    <span>{showPrice ? '▲' : '▼'}</span>
                </div>
                {showPrice && (
                    <div className="filter-content">
                        <input
                            type="range"
                            min="50"
                            max="1200"
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                        />
                        <span>${minPrice}</span>
                        <input
                            type="range"
                            min="50"
                            max="1200"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                        />
                        <span>${maxPrice}</span>
                    </div>
                )}
            </div>

            {/* Departure Time Section */}
            <div className="filter-section">
                <div
                    className="filter-header"
                    onClick={() => toggleSection(setShowTime)}
                >
                    <span>Departure Time</span>
                    <span>{showTime ? '▲' : '▼'}</span>
                </div>
                {showTime && (
                    <div className="filter-content">
                        <input
                            type="time"
                            onChange={(e) => console.log('Departure time:', e.target.value)}
                        />
                        <input
                            type="time"
                            onChange={(e) => console.log('Arrival time:', e.target.value)}
                        />
                    </div>
                )}
            </div>

            {/* Rating Section */}
            <div className="filter-section">
                <div
                    className="filter-header"
                    onClick={() => toggleSection(setShowRating)}
                >
                    <span>Rating</span>
                    <span>{showRating ? '▲' : '▼'}</span>
                </div>
                {showRating && (
                    <div className="filter-content">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <button
                                key={rating}
                                className="rating-button"
                                onClick={() => console.log('Selected rating:', rating)}
                            >
                                {rating}+
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Airlines Section */}
            <div className="filter-section">
                <div
                    className="filter-header"
                    onClick={() => toggleSection(setShowAirlines)}
                >
                    <span>Airlines</span>
                    <span>{showAirlines ? '▲' : '▼'}</span>
                </div>
                {showAirlines && (
                    <div className="filter-content">
                        {['Emirates', 'Fly Dubai', 'Qatar', 'Etihad'].map((airline) => (
                            <label key={airline} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value={airline}
                                    onChange={(e) =>
                                        setAirlineFilter(e.target.value)
                                    }
                                />
                                {airline}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Trips Section */}
            <div className="filter-section">
                <div
                    className="filter-header"
                    onClick={() => toggleSection(setShowTrips)}
                >
                    <span>Trips</span>
                    <span>{showTrips ? '▲' : '▼'}</span>
                </div>
                {showTrips && (
                    <div className="filter-content">
                        {['Round trip', 'One Way', 'Multi-City', 'My Dates Are Flexible'].map(
                            (trip) => (
                                <label key={trip} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        value={trip}
                                        onChange={(e) =>
                                            setTripFilter(e.target.value)
                                        }
                                    />
                                    {trip}
                                </label>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterSidebar;
