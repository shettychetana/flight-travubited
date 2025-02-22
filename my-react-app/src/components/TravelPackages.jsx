import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Nav } from "react-bootstrap";
import  "../styles/TravelPackages.css"

const allPackages = {
  "Asia": [
    {
      img: "images/sydeny1.png",
      duration: "10 days, 9 Night",
      price: "$2181/person",
      title: "breathtaking landscapes await here",
      location: "Sydney, Australia",
    },
    {
      img: "images/cambodia.png",
      duration: "4 days, 3 Night",
      price: "$380/person",
      title: "Discover ancient temples, lush landscapes",
      location: "Angkor Thon, Cambodia",
    },
    {
      img: "images/hongkong.png",
      duration: "6 days, 5 Night",
      price: "$849/person",
      title: "A vibrant blend of tradition and skyscrapers",
      location: "Macau, Hong Kong",
    },
    {
      img: "images/indonesia.png",
      duration: "5 days, 4 Night",
      price: "$333/person",
      title: "Tropical beaches, lush jungles,and vibrant culture",
      location: "Bali, Indonesia",
    },
  ],
  "Central Asia": [
    {
      img: "https://via.placeholder.com/300x200",
      duration: "6 days, 6 Night",
      price: "$549/person",
      title: "Explore the beauty of ",
      location: "London, Australia",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "2 days, 2 Night",
      price: "$349/person",
      title: "Explore the beauty of Petra",
      location: "London, Cambodia",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "5 days, 4 Night",
      price: "$849/person",
      title: "Explore the beauty of ",
      location: "London, Hong Kong",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "7 days, 6 Night",
      price: "$799/person",
      title: "Adventure in Bali",
      location: "Bali, Indonesia",
    },
  ],
  "Middle Asia": [
    {
      img: "https://via.placeholder.com/300x200",
      duration: "6 days, 6 Night",
      price: "$549/person",
      title: "Explore the beauty of ",
      location: "London, Australia",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "2 days, 2 Night",
      price: "$349/person",
      title: "Explore the beauty of Petra",
      location: "London, Cambodia",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "5 days, 4 Night",
      price: "$849/person",
      title: "Explore the beauty of ",
      location: "London, Hong Kong",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "7 days, 6 Night",
      price: "$799/person",
      title: "Adventure in Bali",
      location: "Bali, Indonesia",
    },
  ],
  "Africa": [
    {
      img: "https://via.placeholder.com/300x200",
      duration: "10 days, 9 Night",
      price: "$1200/person",
      title: "Discover the Outback",
      location: "Sydney, Australia",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "8 days, 7 Night",
      price: "$999/person",
      title: "Northern Lights Adventure",
      location: "Reykjavik, Iceland",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "5 days, 4 Night",
      price: "$849/person",
      title: "Explore the beauty of ",
      location: "London, Hong Kong",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "7 days, 6 Night",
      price: "$799/person",
      title: "Adventure in Bali",
      location: "Bali, Indonesia",
    },
  ],
  "Americas": [
    {
      img: "https://via.placeholder.com/300x200",
      duration: "6 days, 6 Night",
      price: "$549/person",
      title: "Explore the beauty of ",
      location: "London, Australia",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "2 days, 2 Night",
      price: "$349/person",
      title: "Explore the beauty of Petra",
      location: "London, Cambodia",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "5 days, 4 Night",
      price: "$849/person",
      title: "Explore the beauty of ",
      location: "London, Hong Kong",
    },
    {
      img: "https://via.placeholder.com/300x200",
      duration: "7 days, 6 Night",
      price: "$799/person",
      title: "Adventure in Bali",
      location: "Bali, Indonesia",
    },
  ],
};

const TravelPackages = () => {
  const [activeTab, setActiveTab] = useState("Asia");

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
          <Col lg={3} md={6} sm={12} className="mb-4" key={idx}>
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
