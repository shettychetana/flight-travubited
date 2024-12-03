import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FA5B48", color: "#fff" }}>
      {/* Newsletter Section */}
      <div
        style={{
          backgroundColor: "#00103D",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={8} className="text-white">
              <h3>Subscribe Newsletter</h3>
              <p style={{ color: "#BDBDBD" }}>
                The Travel! Get inspired! Receive travel discounts, tips, and behind-the-scenes stories.
              </p>
            </Col>
            <Col md={4}>
              <Form className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  className="me-2"
                  style={{ borderRadius: "4px" }}
                />
                <Button variant="success" style={{ borderRadius: "4px" }}>
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Content */}
      <Container>
        <Row className="py-4">
          {/* Logo and Name */}
          <Col md={3}>
            <h5>TravUnited</h5>
            <p>Explore the world with us!</p>
            <div>
              <a href="#" style={{ color: "#fff", margin: "0 10px" }}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" style={{ color: "#fff", margin: "0 10px" }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={{ color: "#fff", margin: "0 10px" }}>
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" style={{ color: "#fff", margin: "0 10px" }}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>

          {/* Links Sections */}
          <Col md={3}>
            <h5>Our Destinations</h5>
            <ul className="list-unstyled">
              <li>Canada</li>
              <li>Alaska</li>
              <li>France</li>
              <li>Iceland</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Our Activities</h5>
            <ul className="list-unstyled">
              <li>Northern Lights</li>
              <li>Cruising & Sailing</li>
              <li>Multi-activities</li>
              <li>Kayaking</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Travel Blogs</h5>
            <ul className="list-unstyled">
              <li>Bali Travel Guide</li>
              <li>Sri Lanka Travel Guide</li>
              <li>Peru Travel Guide</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
