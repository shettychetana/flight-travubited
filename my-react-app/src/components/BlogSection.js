import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const BlogSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Left Side - Image */}
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src="images/blog.png"
            alt="Beautiful Italy"
            className="img-fluid rounded"
          />
        </Col>
        {/* Right Side - Text */}
        <Col md={6}>
          <h5 className="text-primary mb-2">Our Blog</h5>
          <h2 className="mb-4">Beautiful Italy <br /> Let's Travel</h2>
          <p className="text-muted">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born. I will give you a complete
            account of the system and expound the teachings of the great
            explorer of the truth.
          </p>
          <Button variant="link" className="text-decoration-none text-primary">
            Read More <span>&rarr;</span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogSection;
