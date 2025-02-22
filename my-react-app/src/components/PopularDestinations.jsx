import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const destinations = [
  {
    img: "/images/Millennium Bridge.png", // Replace with actual image URL
    title: "Millennium Bridge",
    location: "London, UK",
  },
  {
    img: "/images/australia.png", // Replace with actual image URL
    title: "Australia",
    location: "Sydney, Australia",
  },
  {
    img: "/images/Kenya.png", 
    title: "the Republic of Kenya",
    location: "Nairobi, Kenya",
  },
  {
    img: "/images/Finland.png", // Replace with actual image URL
    title: "Monument of Finland",
    location: "Helsinki, Finland",
  },
];

const PopularDestinations = () => {
  return (
    <Container className="my-5">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="mb-2">Popular Destinations</h2>
        <p className="text-muted">
          Most popular destinations around the world, from historical places to
          natural wonders.
        </p>
      </div>

      {/* Destinations Grid */}
      <Row>
        {destinations.map((destination, idx) => (
          <Col md={3} className="mb-4" key={idx}>
            <Card className="shadow border-0">
              {/* Card Image with Overlay */}
              <Card.Img
                src={destination.img}
                alt={destination.title}
                className="rounded"
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                <Card.Title className="text-white fs-5">
                  {destination.title}
                </Card.Title>
                <Card.Text className="text-white-50">
                  <i className="bi bi-geo-alt-fill"></i> {destination.location}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularDestinations;
