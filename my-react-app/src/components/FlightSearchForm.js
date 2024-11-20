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

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === 'checkbox' ? e.target.checked : value;
        setFormData((prev) => ({ ...prev, [name]: newValue }));
    };

    const handleTripTypeToggle = (type) => {
        setFormData((prev) => ({
            ...prev,
            tripType: type,
            returnDate: type === 'ROUND_TRIP' ? prev.returnDate : '',
            multiCity: type === 'MULTI_CITY' ? [{ from: '', to: '', date: '' }] : prev.multiCity,
        }));
    };

    const handleMultiCityChange = (index, e) => {
        const { name, value } = e.target;
        const updatedMultiCity = [...formData.multiCity];
        updatedMultiCity[index][name] = value;
        setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
    };

    const addMultiCity = () => {
        setFormData((prev) => ({
            ...prev,
            multiCity: [...prev.multiCity, { from: '', to: '', date: '' }]
        }));
    };

    const removeMultiCity = (index) => {
        const updatedMultiCity = formData.multiCity.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
    };

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

            {/* Form Fields: From, To, Travel Date, Adults, Children */}
            <div className="form-row">
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
            </div>

            {/* Return Date (for Round Trip) */}
            {formData.tripType === 'ROUND_TRIP' && (
                <div className="form-row">
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
                </div>
            )}

            {/* Multi-City Fields */}
            {formData.tripType === 'MULTI_CITY' && (
                <div className="multi-city-container">
                    <label>Multi City:</label>
                    {formData.multiCity.map((city, index) => (
                        <div key={index} className="form-row">
                            <div>
                                <input
                                    type="text"
                                    name="from"
                                    value={city.from}
                                    onChange={(e) => handleMultiCityChange(index, e)}
                                    placeholder="From"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="to"
                                    value={city.to}
                                    onChange={(e) => handleMultiCityChange(index, e)}
                                    placeholder="To"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    name="date"
                                    value={city.date}
                                    onChange={(e) => handleMultiCityChange(index, e)}
                                    required
                                />
                            </div>
                            <div>
                                <button type="button" className="remove-city" onClick={() => removeMultiCity(index)}>
                                    Remove City
                                </button>
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={addMultiCity}>Add another city</button>
                </div>
            )}

            {/* Special Fare Options */}
            <div className="button-container">
                <button type="button">Student</button>
                <button type="button">Senior Citizen</button>
                <button type="button">Book with Emergency</button>
            </div>

            <button type="submit">Search Flights</button>
        </form>
    );
};

export default FlightSearchForm;
