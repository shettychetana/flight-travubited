import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import FlightCard1 from './FlightCard1';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import  "../styles/BookingPage.css";

const BookingPage = () => {
    const location = useLocation();
    const flight = location.state?.flight;

    if (!flight) {
        return <p>No flight selected for booking.</p>;
    }

    return (
        <div className="booking-page">
            <FlightCard1 />
            <div className="container mt-4">
                {/* Main Row */}
                <Row className="mb-3">
                    {/* First Column: Flight Details */}
                    <Col md={6}>
                        <h5 className="fw-bold">{flight.airline}</h5>
                        <p className="text-muted small mb-1">
                            {flight.from} to {flight.to}
                        </p>
                        <Badge bg="success" className="me-2">4.2</Badge>
                        <span className="text-muted small">Very Good - 54 reviews</span>
                    </Col>

                    {/* Second Column: Price and Buttons */}
                    <Col md={6} className="d-flex flex-column align-items-end">
                        {/* Price */}
                        <h4 className="fw-bold text-danger mb-3">₹{flight.price}</h4>

                        {/* Buttons */}
                        <div className="d-flex gap-2">
                            <Button
                                variant="outline-secondary"
                                className="px-3 custom-btn"
                                style={{
                                    border: "1px solid #FF6748",
                                    backgroundColor: "white",
                                    
                                  }}
                                  
                            >
                                <FaHeart />
                            </Button>
                            <Button
                                variant="outline-secondary"
                                className="px-3 custom-btn"
                                style={{ border: "1px solid #FF6748", backgroundColor: "white" }}
                            >
                                <FaShareAlt />
                            </Button>
                            <Button
                                variant="primary"
                                className="px-3 w-50"
                                style={{ border: "1px solid #FF6748", backgroundColor: "white" }}
                            >
                                Book Now
                            </Button>
                        </div>
                    </Col>
                </Row>

                {/* Second Row: Large Image */}
                <Row className="mb-3">
                    <Col md={12}>
                        <Card.Img
                            src="/images/flight/1.png"
                            alt="Emirates A380 Airbus"
                            className=" imagecls"
                            style={{ objectFit: "cover", height: "400px" }} // Adjust height as needed
                        />
                    </Col>
                </Row>

                {/* Third Row: Small Feature Images */}
                <Row className="mt-3">
                    <Col>
                        <h6 className="fw-bold">Basic Economy Features</h6>
                        <Row className="mt-3">
                            {["images/flight2/1.png", "images/flight2/2.png", "images/flight2/3.png", "images/flight2/4.png", "images/flight2/5.png"].map((feature, index) => (
                                <Col key={index} xs={4} md={2} className="text-center">
                                    <img
                                       src={feature}
                                        alt={`Feature ${index + 1}`}
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "80px", height: "80px", objectFit: "cover" }}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>

                {/* Last Row: Emirates Airlines Policies */}
                <Row className="mt-4">
                    <Col>
                        <h5>Emirates Airlines Policies</h5>
                        <ul>
                            <li>Pre-flight cleaning, installation of cabin HEPA filters.</li>
                            <li>Pre-flight health screening questions.</li>
                        </ul>
                    </Col>
                </Row>
            </div>

            <h1>Flight Booking</h1>
            <div className="flight-details">
                <p>Airline: {flight.airline}</p>
                <p>From: {flight.from}</p>
                <p>To: {flight.to}</p>
                <p>Departure: {new Date(flight.departureTime).toLocaleString()}</p>
                <p>Arrival: {new Date(flight.arrivalTime).toLocaleString()}</p>
                <p>Price: ₹{flight.price}</p>
            </div>
            <button>Proceed to Payment</button>
        </div>
    );
};

export default BookingPage;
