import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "../styles/CarseoulCard.css"; // Add custom styles if needed

const carData = [
  {
    name: "Honda Civic",
    type: "Sedan",
    price: "₹1,500",
    per: "per day",
    image: "/images/travunitedhotel.png"
  },
  {
    name: "Toyota Corolla",
    type: "Sedan",
    price: "₹1,200",
    per: "per day",
    image: "/images/travunitedhotel1.png"
  },
  {
    name: "BMW 3 Series",
    type: "Luxury",
    price: "₹5,000",
    per: "per day",
    image: "/images/travunitedhotel2.png"
  },
  {
    name: "Audi Q7",
    type: "SUV",
    price: "₹6,000",
    per: "per day",
    image: "/images/travunitedhotel3.png"
  },
  {
    name: "Mercedes Benz",
    type: "Luxury",
    price: "₹8,000",
    per: "per day",
    image: "/images/travunitedhotel1.png"
  }
];

const CarseoulCard = () => {
  return (
    <Container className="carseoul-card-container mt-5">
      <div className="text-center mb-4">
        <h3>For Your Next Ride</h3>
        <h4>Explore Our Collection</h4>
      </div>
      <Row xs={1} sm={2} md={3} lg={5} className="g-4">
        {carData.map((car, index) => (
          <Col key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={car.image} alt={car.name} />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>
                  <strong>Type:</strong> {car.type}
                  <br />
                  <strong>Price:</strong> {car.price} <span>{car.per}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CarseoulCard;
