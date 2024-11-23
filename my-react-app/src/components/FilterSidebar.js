import React from 'react';

const FilterSidebar = ({ filters }) => {
    return (
        <div className="filter-sidebar">
            <h3>Filters</h3>
            <div className="filter-section">
                <h4>Price Range</h4>
                <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={filters.price}
                    onChange={(e) => filters.setPrice(e.target.value)}
                />
                <p>₹{filters.price}</p>
            </div>

            <div className="filter-section">
                <h4>Airlines</h4>
                <ul>
                    {filters.airlines.map((airline, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={airline.checked}
                                onChange={() => filters.toggleAirline(index)}
                            />
                            {airline.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FilterSidebar;
