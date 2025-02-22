import React from 'react';

const SortOptions = ({ onSortChange }) => {
    return (
        <div className="sort-options">
            <select onChange={(e) => onSortChange(e.target.value)}>
                <option value="price">Sort by Price</option>
                <option value="duration">Sort by Duration</option>
                <option value="departure">Sort by Departure</option>
            </select>
        </div>
    );
};

export default SortOptions;
