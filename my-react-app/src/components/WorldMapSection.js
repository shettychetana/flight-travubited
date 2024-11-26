import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const WorldMapSection = () => {
  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#F76C00" }}>
      <Row className="justify-content-center text-center text-white mb-4">
        <Col md={8}>
          <h2>Let's go places together</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </Col>
        <Col md={2}>
          <Button variant="outline-light">See All</Button>
        </Col>
      </Row>

      <div className="position-relative" style={{ height: "400px" }}>
        {/* Background Map */}
        <div className="world-map-background position-absolute w-100 h-100" />

        {/* Place Pins */}
        <div
          className="position-absolute text-white"
          style={{ top: "25%", left: "20%" }}
        >
          <div className="p-2 bg-white text-dark rounded">
            <p className="m-0">James Doe</p>
            <p className="m-0 small">Backpacking Paris</p>
          </div>
          <div
            className="arrow"
            style={{
              borderTop: "2px solid white",
              borderLeft: "2px solid white",
              width: "15px",
              height: "15px",
              transform: "rotate(45deg)",
              position: "relative",
              top: "5px",
              left: "30px",
            }}
          />
        </div>

        {/* More pins */}
        {/* Repeat the above block for other pins with adjusted top and left */}
      </div>
    </Container>
  );
};

export default WorldMapSection;
