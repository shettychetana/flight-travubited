import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/TravelSection.css"; // Custom CSS for background styling


const TravelSection = () => {
  const destinations = [
    {
      title: "Melbourne",
      subtitle: "An amazing journey",
      price: "$700",
      image: "/images/1e/1.png", // Replace with actual image URL
    },
    {
      title: "Paris",
      subtitle: "A Paris Adventure",
      price: "$600",
      image: "/images/1e/2.png", // Replace with actual image URL
    },
    {
      title: "London",
      subtitle: "London eye adventure",
      price: "$350",
      image: "/images/1e/3.png", // Replace with actual image URL
    },
    {
      title: "Columbia",
      subtitle: "Amazing streets",
      price: "$700",
      image: "/images/1e/4.png", // Replace with actual image URL
    },
  ];

  return (
    <Container className="travel-section my-5">
      <h2 className="text-center">Fall into travel</h2>
      <p className="text-center">
        Going somewhere to celebrate this season? Whether you're going home or
        somewhere to roam, we've got the travel tools to get you to your
        destination.
      </p>
      <Row className="justify-content-center">
        {destinations.map((destination, index) => (
          <Col key={index} md={3} sm={6} className="mb-4">
            <div
              className="travel-card"
              style={{
                backgroundImage: `url(${destination.image})`,
              }}
            >
              <div className="card-overlay">
                <h5>{destination.title}</h5>
                <p>{destination.subtitle}</p>
                <p className="price">{destination.price}</p>
                <Button
                className="book-btn"
                style={{ backgroundColor: '#ff6748', color: 'white',padding:'2px' }}
                >
                Book Now
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4 ">
        <Button variant="" className="butseeall">See All</Button>
      </div>
    </Container>
  );
};

export default TravelSection;
