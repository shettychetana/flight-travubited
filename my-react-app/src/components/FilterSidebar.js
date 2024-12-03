import React, { useState } from 'react';
import "../styles/FilterSidebar.css";

const FilterSidebar = ({ airlines, onFilterChange }) => {
    const [selectedAirlines, setSelectedAirlines] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [departureTime, setDepartureTime] = useState({ start: '', end: '' });

    // Handle airline selection
    const handleAirlineChange = (e) => {
        const airline = e.target.value;
        setSelectedAirlines((prev) =>
            prev.includes(airline) ? prev.filter((a) => a !== airline) : [...prev, airline]
        );
    };

    // Handle filter submission
    const applyFilters = () => {
        onFilterChange({
            airlines: selectedAirlines,
            priceRange,
            departureTime,
        });
    };

    return (
        <div className="filter-sidebar">
            <h3>Filters</h3>

            {/* Airline Filter */}
            <div className="filter-section">
                <h4>Airlines</h4>
                {airlines.map((airline, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            value={airline}
                            checked={selectedAirlines.includes(airline)}
                            onChange={handleAirlineChange}
                        />
                        <label>{airline}</label>
                    </div>
                ))}
            </div>

            {/* Price Range Filter */}
            <div className="filter-section">
                <h4>Price Range</h4>
                <div>
                    <label>Min:</label>
                    <input
                        type="number"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                        placeholder="Min Price"
                    />
                </div>
                <div>
                    <label>Max:</label>
                    <input
                        type="number"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                        placeholder="Max Price"
                    />
                </div>
            </div>

            {/* Departure Time Filter */}
            <div className="filter-section">
                <h4>Departure Time</h4>
                <div>
                    <label>Start:</label>
                    <input
                        type="time"
                        value={departureTime.start}
                        onChange={(e) => setDepartureTime({ ...departureTime, start: e.target.value })}
                    />
                </div>
                <div>
                    <label>End:</label>
                    <input
                        type="time"
                        value={departureTime.end}
                        onChange={(e) => setDepartureTime({ ...departureTime, end: e.target.value })}
                    />
                </div>
            </div>

            {/* Apply Filters Button */}
            <button onClick={applyFilters}>Apply Filters</button>
        </div>
    );
};

export default FilterSidebar;
