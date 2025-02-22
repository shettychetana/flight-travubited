import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

const FlightCard1 = () => {
  return (
    <div className="container mt-4">
      {/* Breadcrumb Navigation */}
      <Row className="mb-3">
        <Col>
          <p className="text-muted">
            <small>
              <a href="/turkey" className="text-decoration-none text-dark">Turkey</a> &gt; 
              <a href="/istanbul" className="text-decoration-none text-dark"> Istanbul</a> &gt; 
              <span className="text-primary"> CVK Park Bosphorus Hotel Istanbul</span>
            </small>
          </p>
        </Col>
      </Row>

      {/* Main Card */}
      {/* <Card className="shadow-sm border-0">
        <Row className="g-0">
         
          <Col md={8}>
            <Card.Img
              src="https://your-image-url-here.com"
              alt="Emirates A380 Airbus"
              className="rounded-0"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Col>
         
          <Col md={4} className="d-flex flex-column justify-content-between p-3">
            <div>
              <h5 className="fw-bold">Emirates A380 Airbus</h5>
              <p className="text-muted small mb-1">
                Gümüşsuyu Mah. İnönü Cad. No:8, Istanbul 34437
              </p>
              <Badge bg="success" className="me-2">4.2</Badge>
              <span className="text-muted small">Very Good - 54 reviews</span>
            </div>
            <div>
              <h4 className="fw-bold text-danger">$240</h4>
              <Button variant="primary" className="w-100 fw-bold">
                Book Now
              </Button>
            </div>
          </Col>
        </Row>
      </Card> */}

    
      {/* <div className="mt-4">
        <h6 className="fw-bold">Basic Economy Features</h6>
        <Row className="mt-3">
          {["Feature1.jpg", "Feature2.jpg", "Feature3.jpg", "Feature4.jpg", "Feature5.jpg"].map((feature, index) => (
            <Col key={index} xs={4} md={2} className="text-center">
              <img
                src={`https://your-image-url-here/${feature}`}
                alt={`Feature ${index + 1}`}
                className="img-fluid rounded"
                style={{ maxWidth: "80px", height: "80px", objectFit: "cover" }}
              />
            </Col>
          ))}
        </Row>
      </div> */}

      
      {/* <div className="mt-4">
        <h6 className="fw-bold">Emirates Airlines Policies</h6>
        <Card className="border-0 bg-light">
          <Card.Body>
            <ul className="mb-0">
              <li className="mb-1">Pre-flight cleaning, installation of cabin HEPA filters.</li>
              <li>Pre-flight health screening questions.</li>
            </ul>
          </Card.Body>
        </Card>
      </div> */}
    </div>
  );
};

export default FlightCard1;
