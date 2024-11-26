import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const destinations = [
  { img: "images/IstanbulTurkey.png", name: "Istanbul, Turkey" },
  { img: "images/Sydney.png", name: "Sydney, Australia" },
  { img: "images/Azerbaijan.png", name: "Baku, Azerbaijan" },
  { img: "images/Maldives.png", name: "Male, Maldives" },
  { img: "images/france1.png", name: "Paris, France" },
  { img: "images/uk.png", name: "New York, US" },
  { img: "images/london.png", name: "London, UK" },
  { img: "images/japan.png", name: "Tokyo, Japan" },
  { img: "images/dubai.png", name: "Dubai, UAE" },
];

const GlobalDestinations = () => {
  return (
    <Container className="my-5">
      {/* Title Section */}
      <div className="text-center mb-4">
        <h2>Explore Global Destinations with Easy Visa Solutions</h2>
        <p className="text-muted">
          Effortless visa services designed to simplify your travel experience,
          ensuring fast approvals and a smooth journey to your chosen
          destination.
        </p>
      </div>

      {/* Destinations Grid */}
      <Row className="gy-4">
        {destinations.map((destination, idx) => (
          <Col sm={12} md={4} key={idx}>
            <Card className="border-0 shadow-sm">
              <Card.Img
                variant="top"
                src={destination.img}
                alt={destination.name}
                className="rounded"
              />
              <Card.Body>
                <Card.Title className="fs-6">{destination.name}</Card.Title>
                <Card.Text className="text-muted">Visa • Flights • Hotels</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* See More Button */}
      <div className="text-center mt-4">
        <Button variant="outline-primary">See more places</Button>
      </div>
    </Container>
  );
};

export default GlobalDestinations;
