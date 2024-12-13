import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const FlightSearchForm = () => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        travelDate: '',
        returnDate: '',
        adults: 1,
        children: 0,
        infants: 0,
        tripType: 'ONE_WAY',
        cabinClass: 'ECONOMY',
        specialType: '',
        multiCity: [{ from: '', to: '', travelDate: '' }],
    });

    const navigate = useNavigate();

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
            multiCity: [...prev.multiCity, { from: '', to: '', travelDate: '' }],
        }));
    };

    const handleRemoveCity = (index) => {
        const updatedMultiCity = formData.multiCity.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestBody = {
            searchQuery: {
                cabinClass: formData.cabinClass,
                paxInfo: {
                    ADULT: formData.adults.toString(),
                    CHILD: formData.children.toString(),
                    INFANT: formData.infants.toString(),
                },
                routeInfos: formData.tripType === 'MULTI_CITY'
                    ? formData.multiCity.map((city) => ({
                        fromCityOrAirport: { code: city.from.trim() },
                        toCityOrAirport: { code: city.to.trim() },
                        travelDate: city.travelDate,
                    }))
                    : [
                        {
                            fromCityOrAirport: { code: formData.from.trim() },
                            toCityOrAirport: { code: formData.to.trim() },
                            travelDate: formData.travelDate,
                            returnDate: formData.returnDate,
                        },
                    ],
                searchModifiers: {
                    isDirectFlight: true,
                    isConnectingFlight: false,
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
            console.log('API Response:', data);

            navigate('/results', { state: { results: data.searchResult?.tripInfos?.ONWARD || [] } });
        } catch (error) {
            console.error('Error fetching flight data:', error);
        }
    };

    return (
        <div className="flight-search-container">
            <form onSubmit={handleSubmit} className="flight-search-form">
                <Container>
                    <Row className="mb-4">
                        <Col md={6}>
                            <div className="trip-type-radio-buttons d-flex">
                                {['ONE_WAY', 'ROUND_TRIP', 'MULTI_CITY'].map((type) => (
                                    <div key={type} className="radio-button">
                                        <input
                                            type="radio"
                                            id={type}
                                            name="tripType"
                                            value={type}
                                            checked={formData.tripType === type}
                                            onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                                        />
                                        <label htmlFor={type}>{type.replace('_', ' ')}</label>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>Book International and Domestic Flights</div>
                        </Col>
                    </Row>
                </Container>

                {/* Fields for ONE WAY and ROUND TRIP */}
                {formData.tripType !== 'MULTI_CITY' && (
                    <div className="form-row mb-4">
                        <input
                            type="text"
                            name="from"
                            value={formData.from}
                            onChange={handleChange}
                            placeholder="From (e.g., DEL)"
                            className="form-control"
                            required
                        />
                        <input
                            type="text"
                            name="to"
                            value={formData.to}
                            onChange={handleChange}
                            placeholder="To (e.g., MAA)"
                            className="form-control"
                            required
                        />
                        <input
                            type="date"
                            name="travelDate"
                            value={formData.travelDate}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                        {formData.tripType === 'ROUND_TRIP' && (
                            <input
                                type="date"
                                name="returnDate"
                                value={formData.returnDate}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        )}
                    </div>
                )}

                {/* Multi-City Fields */}
                {formData.tripType === 'MULTI_CITY' && (
                    <div className="multi-city-fields">
                        {formData.multiCity.map((city, index) => (
                            <div key={index} className="multi-city-row">
                                <input
                                    type="text"
                                    name="from"
                                    value={city.from}
                                    onChange={(e) => handleMultiCityChange(e, index)}
                                    placeholder="From (e.g., DEL)"
                                    className="form-control"
                                    required
                                />
                                <input
                                    type="text"
                                    name="to"
                                    value={city.to}
                                    onChange={(e) => handleMultiCityChange(e, index)}
                                    placeholder="To (e.g., MAA)"
                                    className="form-control"
                                    required
                                />
                                <input
                                    type="date"
                                    name="travelDate"
                                    value={city.travelDate}
                                    onChange={(e) => handleMultiCityChange(e, index)}
                                    className="form-control"
                                    required
                                />
                                {index > 0 && (
                                    <Button variant="danger" onClick={() => handleRemoveCity(index)}>
                                        Remove City
                                    </Button>
                                )}
                            </div>
                        ))}
                        <Button variant="secondary" onClick={handleAddCity}>
                            Add Another City
                        </Button>
                    </div>
                )}

                {/* Passenger Counts */}
                <div className="passenger-counts mb-4">
                    <label>
                        Adults:
                        <input
                            type="number"
                            name="adults"
                            value={formData.adults}
                            onChange={handleChange}
                            min="1"
                            className="form-control"
                            required
                        />
                    </label>
                    <label>
                        Children:
                        <input
                            type="number"
                            name="children"
                            value={formData.children}
                            onChange={handleChange}
                            min="0"
                            className="form-control"
                        />
                    </label>
                    <label>
                        Infants:
                        <input
                            type="number"
                            name="infants"
                            value={formData.infants}
                            onChange={handleChange}
                            min="0"
                            className="form-control"
                        />
                    </label>
                </div>

                {/* Cabin Class Selection */}
                <div className="cabin-class-selection mb-4">
                    <label>
                        Cabin Class:
                        <select
                            name="cabinClass"
                            value={formData.cabinClass}
                            onChange={handleChange}
                            className="form-control"
                        >
                            {['ECONOMY', 'PREMIUM_ECONOMY', 'BUSINESS', 'FIRST'].map((classType) => (
                                <option key={classType} value={classType}>
                                    {classType.replace('_', ' ')}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <Button type="submit" variant="primary">Search Flights</Button>
            </form>
        </div>
    );
};

export default FlightSearchForm;
