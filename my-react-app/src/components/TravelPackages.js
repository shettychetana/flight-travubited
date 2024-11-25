import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Nav } from "react-bootstrap";

const allPackages = {
  "Hot Details": [
    {
      img: "https://via.placeholder.com/300x200", // Replace with actual image URL
      duration: "6 days, 6 Night",
      price: "$549/person",
      title: "Explore the beauty of Blue lagoon",
      location: "London, Inggris",
    },
    {
      img: "https://via.placeholder.com/300x200", // Replace with actual image URL
      duration: "2 days, 2 Night",
      price: "$349/person",
      title: "Explore the beauty of Petra",
      location: "London, Inggris",
    },
    {
      img: "https://via.placeholder.com/300x200", // Replace with actual image URL
      duration: "5 days, 4 Night",
      price: "$849/person",
      title: "Explore the beauty of Old bagan",
      location: "London, Inggris",
    },
  ],
  "Back Pack": [
    {
      img: "https://via.placeholder.com/300x200",
      duration: "4 days, 3 Night",
      price: "$450/person",
      title: "Backpack to the Alps",
      location: "Zurich, Switzerland",
    },
  ],
  Asia: [
    {
      img: "https://via.placeholder.com/300x200",
      duration: "7 days, 6 Night",
      price: "$799/person",
      title: "Adventure in Bali",
      location: "Bali, Indonesia",
    },
  ],
  Europe: [
    {
      img: "https://via.placeholder.com/300x200",
      duration: "5 days, 4 Night",
      price: "$899/person",
      title: "Romance in Paris",
      location: "Paris, France",
    },
  ],
  More: [
    {
      img: "https://via.placeholder.com/300x200",
      duration: "10 days, 9 Night",
      price: "$1200/person",
      title: "Discover the Outback",
      location: "Sydney, Australia",
    },
  ],
};

const TravelPackages = () => {
  const [activeTab, setActiveTab] = useState("Hot Details");

  return (
    <Container className="my-5">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="mb-2">Our Best Packages For You</h2>
        <p className="text-muted">Hot Details</p>

        {/* Tabs Navigation */}
        <Nav className="justify-content-center" variant="tabs">
          {Object.keys(allPackages).map((tab) => (
            <Nav.Item key={tab}>
              <Nav.Link
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>

      {/* Packages */}
      <Row>
        {allPackages[activeTab].map((pkg, idx) => (
          <Col md={4} className="mb-4" key={idx}>
            <Card className="shadow border-0">
              <Card.Img variant="top" src={pkg.img} alt={pkg.title} />
              <Card.Body>
                <p className="text-muted mb-1">{pkg.duration}</p>
                <h5 className="text-danger mb-3">{pkg.price}</h5>
                <Card.Title>{pkg.title}</Card.Title>
                <p className="text-muted mb-3">
                  <i className="bi bi-geo-alt-fill text-danger"></i> {pkg.location}
                </p>
                <Button variant="danger" className="w-100">
                  Explore More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TravelPackages;
