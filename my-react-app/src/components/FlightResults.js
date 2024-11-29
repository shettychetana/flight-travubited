import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa'; // You can install react-icons if you want to use icons
import Form1 from '../components/Form1';


const FlightResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const results = location.state?.results || [];
    const [filteredResults, setFilteredResults] = useState(results);
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 10000,
        airline: '',
        minDuration: 0,
        maxDuration: 600,
        departureTime: ''
    });

    const airlines = [...new Set(results.flatMap(flight =>
        flight.sI.map(segment => segment.fD.aI.code)
    ))];

    useEffect(() => {
        filterFlights();
    }, [filters]);

    const filterFlights = () => {
        let filtered = results;

        filtered = filtered.filter(flight => {
            const totalPrice = flight.totalPriceList[0]?.fd.ADULT?.fC?.TF || 0;
            return totalPrice >= filters.minPrice && totalPrice <= filters.maxPrice;
        });

        if (filters.airline) {
            filtered = filtered.filter(flight => flight.sI.some(segment => segment.fD.aI.code === filters.airline));
        }

        filtered = filtered.filter(flight => {
            return flight.sI.some(segment => segment.duration >= filters.minDuration && segment.duration <= filters.maxDuration);
        });

        if (filters.departureTime) {
            filtered = filtered.filter(flight => {
                return flight.sI.some(segment => new Date(segment.dt).toLocaleTimeString().includes(filters.departureTime));
            });
        }

        setFilteredResults(filtered);
    };

    const handleBooking = (flight) => {
        navigate('/booking', { state: { flight } });
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    return (
        <div className="flight-results-container d-flex">
            <div className="form-section mb-4">
        <Form1/>

      </div>
          

            <div className="sidebar" style={sidebarStyles}>
                <h4 className="sidebar-title">
                    <FaFilter /> Filters
                </h4>
                
                {/* Price Filter */}
                <Form.Group className="mb-3">
                    <Form.Label>Price Range</Form.Label>
                    <div className="d-flex">
                        <Form.Control
                            type="number"
                            name="minPrice"
                            value={filters.minPrice}
                            onChange={handleFilterChange}
                            placeholder="Min Price"
                            className="mr-2"
                        />
                        <Form.Control
                            type="number"
                            name="maxPrice"
                            value={filters.maxPrice}
                            onChange={handleFilterChange}
                            placeholder="Max Price"
                        />
                    </div>
                </Form.Group>

                {/* Airline Filter */}
                <Form.Group className="mb-3">
                    <Form.Label>Airline</Form.Label>
                    <Form.Control
                        as="select"
                        name="airline"
                        value={filters.airline}
                        onChange={handleFilterChange}
                    >
                        <option value="">All Airlines</option>
                        {airlines.map((airlineCode, index) => {
                            const airlineName = results
                                .flatMap(flight => flight.sI)
                                .find(segment => segment.fD.aI.code === airlineCode)?.fD.aI.name;
                            return (
                                <option key={index} value={airlineCode}>
                                    {airlineName} ({airlineCode})
                                </option>
                            );
                        })}
                    </Form.Control>
                </Form.Group>

                {/* Duration Filter */}
                <Form.Group className="mb-3">
                    <Form.Label>Duration (minutes)</Form.Label>
                    <div className="d-flex">
                        <Form.Control
                            type="number"
                            name="minDuration"
                            value={filters.minDuration}
                            onChange={handleFilterChange}
                            placeholder="Min Duration"
                            className="mr-2"
                        />
                        <Form.Control
                            type="number"
                            name="maxDuration"
                            value={filters.maxDuration}
                            onChange={handleFilterChange}
                            placeholder="Max Duration"
                        />
                    </div>
                </Form.Group>

                {/* Departure Time Filter */}
                <Form.Group className="mb-3">
                    <Form.Label>Departure Time</Form.Label>
                    <Form.Control
                        type="time"
                        name="departureTime"
                        value={filters.departureTime}
                        onChange={handleFilterChange}
                    />
                </Form.Group>
            </div>

            <div className="flight-list" style={{ flex: 1 }}>
                <Row className="g-4">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((flight, index) => (
                            flight.sI.map((segment, segmentIndex) => (
                                <Col key={`${index}-${segmentIndex}`} xs={12}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{segment.fD.aI.name} ({segment.fD.aI.code})</Card.Title>
                                            <Card.Text><strong>Flight Number:</strong> {segment.fD.fN}</Card.Text>
                                            <Card.Text><strong>Aircraft:</strong> {segment.fD.eT}</Card.Text>
                                            <Card.Text><strong>Departure:</strong> {segment.da.city} ({segment.da.code})</Card.Text>
                                            <Card.Text><strong>Arrival:</strong> {segment.aa.city} ({segment.aa.code})</Card.Text>
                                            <Card.Text><strong>Departure Time:</strong> {new Date(segment.dt).toLocaleString()}</Card.Text>
                                            <Card.Text><strong>Arrival Time:</strong> {new Date(segment.at).toLocaleString()}</Card.Text>
                                            <Card.Text><strong>Duration:</strong> {segment.duration} minutes</Card.Text>
                                            <Card.Text><strong>Total Price:</strong> ₹{flight.totalPriceList[0]?.fd.ADULT?.fC?.TF || 'N/A'}</Card.Text>
                                            <Button variant="primary" onClick={() => handleBooking(flight)}>
                                                Book Now
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ))
                    ) : (
                        <p>No flights found.</p>
                    )}
                </Row>
            </div>
        </div>
    );
};

const sidebarStyles = {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    height: '100vh',
    position: 'sticky',
    top: '0'
};

export default FlightResults;
