import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const Form1 = () => {
  return (
    <div className="form-container p-4 "  >
      <Form>
        {/* Trip Type */}
        <Row className="mb-3">
          <Col>
            <Form.Label>Trip Type</Form.Label>
            <Form.Select>
              <option value="ONE_WAY">One Way</option>
              <option value="ROUND_TRIP">Round Trip</option>
              <option value="MULTI_CITY">Multi City</option>
            </Form.Select>
          </Col>
        </Row>

        {/* From and To */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>From</Form.Label>
            <Form.Control type="text" placeholder="Enter departure city" />
          </Col>
          <Col md={6}>
            <Form.Label>To</Form.Label>
            <Form.Control type="text" placeholder="Enter destination city" />
          </Col>
        </Row>

        {/* Departure and Return */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>Departure Date</Form.Label>
            <Form.Control type="date" />
          </Col>
          <Col md={6}>
            <Form.Label>Return Date</Form.Label>
            <Form.Control type="date" />
          </Col>
        </Row>

        {/* Passengers and Fare Type */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>Passengers & Class</Form.Label>
            <Form.Control
              type="text"
              placeholder="1 Adult, Economy/Premium"
            />
          </Col>
          <Col md={6}>
            <Form.Label>Fare Type</Form.Label>
            <Form.Select>
              <option value="Regular">Regular</option>
              <option value="Student">Student</option>
              <option value="Senior Citizen">Senior Citizen</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Search Button */}
        <Row>
          <Col>
            <Button variant="primary" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const formStyles = {
  maxWidth: '600px',
  margin: '0 auto',
  background: '#f8f9fa',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default Form1;
