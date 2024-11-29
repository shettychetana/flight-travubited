import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlightResults from './FlightResults';

const FlightSearchForm = () => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        travelDate: '',
        returnDate: '',
        adults: 1,
        children: 0,
        tripType: 'ONE_WAY', // Default trip type is one way
        specialType: '', // For senior/student/other buttons
        multiCity: [{ from: '', to: '', travelDate: '' }], // Multi-city initialized with one leg
    });

    const navigate = useNavigate();  // Hook to navigate to another page

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleMultiCityChange = (e, index) => {
        const { name, value } = e.target;
        const updatedMultiCity = [...formData.multiCity];
        updatedMultiCity[index] = { ...updatedMultiCity[index], [name]: value };
        setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
    };

    const handleAddCity = () => {
        setFormData((prev) => ({
            ...prev,
            multiCity: [...prev.multiCity, { from: '', to: '', travelDate: '' }],  // Add new city leg
        }));
    };

    const handleRemoveCity = (index) => {
        const updatedMultiCity = formData.multiCity.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Building request body based on the form data
        const requestBody = {
            searchQuery: {
                cabinClass: "ECONOMY",
                paxInfo: {
                    ADULT: formData.adults.toString(),
                    CHILD: formData.children.toString(),
                    INFANT: "0",
                },
                routeInfos: formData.tripType === 'MULTI_CITY' ? formData.multiCity.map(city => ({
                    fromCityOrAirport: { code: city.from },
                    toCityOrAirport: { code: city.to },
                    travelDate: city.travelDate,
                })) : [
                    {
                        fromCityOrAirport: { code: formData.from },
                        toCityOrAirport: { code: formData.to },
                        travelDate: formData.travelDate,
                        returnDate: formData.returnDate,
                    },
                ],
                searchModifiers: {
                    pft: formData.specialType, // Handling special types like senior/student
                },
            },
        };

        try {
            const response = await fetch('https://tripjack.com/fms/v1/air-search-all', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': '610720564f329c1c-ae91-4b19-b5b0-6083cb2fb172',
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();
            console.log(data);
            
            // After getting the data, navigate to the results page and pass the data
            navigate('/results', { state: { results: data.searchResult?.tripInfos?.ONWARD || [] } });
            
        } catch (error) {
            console.error('Error fetching flight data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flight-search-form">
            <h2>Flight Search</h2>

            {/* Trip Type Buttons */}
            <div className="trip-type-buttons">
                <button
                    type="button"
                    className={formData.tripType === 'ONE_WAY' ? 'selected' : ''}
                    onClick={() => setFormData({ ...formData, tripType: 'ONE_WAY' })}
                >
                    One Way
                </button>
                <button
                    type="button"
                    className={formData.tripType === 'ROUND_TRIP' ? 'selected' : ''}
                    onClick={() => setFormData({ ...formData, tripType: 'ROUND_TRIP' })}
                >
                    Round Trip
                </button>
                <button
                    type="button"
                    className={formData.tripType === 'MULTI_CITY' ? 'selected' : ''}
                    onClick={() => setFormData({ ...formData, tripType: 'MULTI_CITY' })}
                >
                    Multi City
                </button>
            </div>

            {/* Form Fields */}
            {formData.tripType === 'MULTI_CITY' ? (
                <div className="multi-city-fields">
                    <h3>Multi-City</h3>
                    {formData.multiCity.map((city, index) => (
                        <div key={index} className="form-row">
                            <div>
                                <label>From:</label>
                                <input
                                    type="text"
                                    name="from"
                                    value={city.from}
                                    onChange={(e) => handleMultiCityChange(e, index)}
                                    placeholder="From (e.g., DEL)"
                                    required
                                />
                            </div>
                            <div>
                                <label>To:</label>
                                <input
                                    type="text"
                                    name="to"
                                    value={city.to}
                                    onChange={(e) => handleMultiCityChange(e, index)}
                                    placeholder="To (e.g., MAA)"
                                    required
                                />
                            </div>
                            <div>
                                <label>Travel Date:</label>
                                <input
                                    type="date"
                                    name="travelDate"
                                    value={city.travelDate}
                                    onChange={(e) => handleMultiCityChange(e, index)}
                                    required
                                />
                            </div>
                            {index > 0 && (
                                <button type="button" onClick={() => handleRemoveCity(index)}>
                                    Remove City
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={handleAddCity}>Add Another City</button>
                </div>
            ) : (
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
            )}

            {/* Special Buttons (Student, Senior Citizen, etc.) */}
            <div className="extra-buttons">
                <button type="button" onClick={() => setFormData({ ...formData, specialType: 'STUDENT' })}>
                    Student
                </button>
                <button type="button" onClick={() => setFormData({ ...formData, specialType: 'SENIOR_CITIZEN' })}>
                    Senior Citizen
                </button>
                <button type="button" onClick={() => setFormData({ ...formData, specialType: 'EMERGENCY' })}>
                    Emergency
                </button>
            </div>

            <button type="submit">Search Flights</button>
        </form>
    );
};

export default FlightSearchForm;
