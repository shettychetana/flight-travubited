import React, { useState } from 'react';

const FlightSearchForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        travelDate: '',
        returnDate: '',
        adults: 1,
        children: 0,
        infants: 0,
        tripType: 'ONE_WAY', // Default trip type is One Way
        multiCity: [{ from: '', to: '', date: '' }] // Default Multi City array
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === 'checkbox' ? e.target.checked : value;
        setFormData((prev) => ({ ...prev, [name]: newValue }));
    };

    // Handle trip type selection
    const handleTripTypeToggle = (type) => {
        setFormData((prev) => ({
            ...prev,
            tripType: type,
            returnDate: type === 'ROUND_TRIP' ? prev.returnDate : '', // Reset return date if not round trip
            multiCity: type === 'MULTI_CITY' ? [{ from: '', to: '', date: '' }] : prev.multiCity, // Reset multi city
        }));
    };

    // Handle multi-city fields
    const handleMultiCityChange = (index, e) => {
        const { name, value } = e.target;
        const updatedMultiCity = [...formData.multiCity];
        updatedMultiCity[index][name] = value;
        setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
    };

    // Handle adding a new multi-city trip
    const addMultiCity = () => {
        setFormData((prev) => ({
            ...prev,
            multiCity: [...prev.multiCity, { from: '', to: '', date: '' }]
        }));
    };

    // Handle removing a city from the multi-city list
    const removeMultiCity = (index) => {
        const updatedMultiCity = formData.multiCity.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
    };

    // Submit form data
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Send formData to the parent component
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Flight Search</h2>

            {/* Trip Type Toggle */}
            <div className="trip-type-toggle">
                <button
                    type="button"
                    className={formData.tripType === 'ONE_WAY' ? 'selected' : ''}
                    onClick={() => handleTripTypeToggle('ONE_WAY')}
                >
                    One Way
                </button>
                <button
                    type="button"
                    className={formData.tripType === 'ROUND_TRIP' ? 'selected' : ''}
                    onClick={() => handleTripTypeToggle('ROUND_TRIP')}
                >
                    Round Trip
                </button>
                <button
                    type="button"
                    className={formData.tripType === 'MULTI_CITY' ? 'selected' : ''}
                    onClick={() => handleTripTypeToggle('MULTI_CITY')}
                >
                    Multi City
                </button>
            </div>

            {/* From City */}
            <div>
                <label>From:</label>
                <input
                    type="text"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    placeholder="From (e.g., DEL)"
                    required
                />
            </div>

            {/* To City */}
            <div>
                <label>To:</label>
                <input
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    placeholder="To (e.g., MAA)"
                    required
                />
            </div>

            {/* Travel Date */}
            <div>
                <label>Travel Date:</label>
                <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Return Date (for Round Trip only) */}
            {formData.tripType === 'ROUND_TRIP' && (
                <div>
                    <label>Return Date:</label>
                    <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                        required
                    />
                </div>
            )}

            {/* Multi-City (only shown for Multi-City trip type) */}
            {formData.tripType === 'MULTI_CITY' && (
                <div className="multi-city-container">
                    <label>Multi City:</label>
                    {formData.multiCity.map((city, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name="from"
                                value={city.from}
                                onChange={(e) => handleMultiCityChange(index, e)}
                                placeholder="From"
                                required
                            />
                            <input
                                type="text"
                                name="to"
                                value={city.to}
                                onChange={(e) => handleMultiCityChange(index, e)}
                                placeholder="To"
                                required
                            />
                            <input
                                type="date"
                                name="date"
                                value={city.date}
                                onChange={(e) => handleMultiCityChange(index, e)}
                                required
                            />
                            <button
                                type="button"
                                className="remove-city"
                                onClick={() => removeMultiCity(index)}
                            >
                                Remove City
                            </button>
                            {index === formData.multiCity.length - 1 && (
                                <button type="button" onClick={addMultiCity}>Add another city</button>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Travelers & Class */}
            <div>
                <label>Adults:</label>
                <input
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    min="1"
                    required
                />
            </div>
            <div>
                <label>Children:</label>
                <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    min="0"
                />
            </div>
            <div>
                <label>Infants:</label>
                <input
                    type="number"
                    name="infants"
                    value={formData.infants}
                    onChange={handleChange}
                    min="0"
                />
            </div>

            <button type="submit">Search Flights</button>
        </form>
    );
};

export default FlightSearchForm;
