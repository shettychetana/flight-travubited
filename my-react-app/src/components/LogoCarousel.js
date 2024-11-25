import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const partners = [
  { src: "images/Fly Emirates.png", alt: "Fly Emirates" },
  { src: "https://via.placeholder.com/150x50?text=Trivago", alt: "Trivago" },
  { src: "https://via.placeholder.com/150x50?text=Airbnb", alt: "Airbnb" },
  { src: "https://via.placeholder.com/150x50?text=Turkish+Airlines", alt: "Turkish Airlines" },
  { src: "https://via.placeholder.com/150x50?text=Swiss", alt: "Swiss" },
];

const LogoCarousel = () => {
  return (
    <div className="bg-light py-4">
      <Container>
        <Row className="align-items-center text-center">
          {partners.map((partner, index) => (
            <Col xs={6} sm={4} md={2} key={index}>
              <img
                src={partner.src}
                alt={partner.alt}
                className="img-fluid mx-auto d-block"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LogoCarousel;
