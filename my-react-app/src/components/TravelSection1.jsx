import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../styles/TravelSection1.css"; // Include your custom CSS here

const TravelSection1 = () => {
  return (
    <Container className="travel-section my-5">
      {/* Intro Section */}
      
      <div className="d-flex">
        <div>  <h2 className="text-center">Fall into travel</h2>
      <p className="text-center">
        Going somewhere to celebrate this season? Whether you're going home or
        somewhere to roam, we've got the travel tools to get you to your
        destination.
      </p></div>
    
      <div className="text-center mb-4">
        <Button variant="outline-secondary" className="see-all-btn">
          See All
        </Button>
      </div>
      </div>
      

      {/* Travel Package Section */}
      <Row className="align-items-center">
        {/* Left Card */}
        <Col md={6} className="mb-4">
          <Card className="p-4 travel-description-card">
            <h3>Backpacking Sri Lanka</h3>
            <p className="mt-3">
              Traveling is a unique experience as it's the best way to unplug
              from the pushes and pulls of daily life. It helps us forget our
              problems, frustrations, and fears at home. During our journey, we
              experience life in different ways. We explore new places,
              cultures, cuisines, traditions, and ways of living.
            </p>
            <h4 className="price-tag mt-3">From <span>$700</span></h4>
            <Button className="book-btn mt-4">Book Package</Button>
          </Card>
        </Col>

        {/* Right Image Grid */}
        <Col md={6}>
          <Row className="g-2">
            <Col md={6} sm={6}>
              <div className="travel-image" style={{ backgroundImage: "url('/images/travel.png')" }}></div>
            </Col>
            <Col md={6} sm={6}>
              <div className="travel-image" style={{ backgroundImage: "url('/images/travel2.png')" }}></div>
            </Col>
            <Col md={6} sm={6}>
              <div className="travel-image" style={{ backgroundImage: "url('/images/travel3.png')" }}></div>
            </Col>
            <Col md={6} sm={6}>
              <div className="travel-image" style={{ backgroundImage: "url('/images/travel4.png')" }}></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TravelSection1;
