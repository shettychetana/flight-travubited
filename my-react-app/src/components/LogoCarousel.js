import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

const partners = [
  { src: "images/Fly Emirates.png", alt: "Fly Emirates" },
  { src: "images/1.png", alt: "Alaska Airlines" },
  { src: "images/2.png", alt: "Airbnb" },
 
  { src: "images/3.png", alt: "Swiss" },
  { src: "images/4.png", alt: "Swiss" },
  { src: "images/5.png", alt: "Swiss" },
];

const LogoCarousel = () => {
  const settings = {
    dots: false, // Add navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval in ms
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // Breakpoint for mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Smaller mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-light py-4">
      <Container>
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <img
                src={partner.src}
                alt={partner.alt}
                className="img-fluid mx-auto"
                style={{ maxWidth: "200px" }}
              />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default LogoCarousel;
