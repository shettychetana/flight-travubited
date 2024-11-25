import React from "react";
import "../styles/Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      quote: "A real sense of community, nurtured",
      text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for her help.",
      stars: 5,
      author: "Olga",
      location: "Weave Studios – Kai Tak",
      image: "", // Replace with actual image URLs
    },
    {
      quote: "The facilities are superb. Clean, slick, bright.",
      text: "A real sense of community, nurtured. Really appreciate the help and support from the staff during these tough times.",
      stars: 5,
      author: "Thomas",
      location: "Weave Studios – Olympic",
      image: "image2.jpg",
    },
    {
      quote: "A real sense of community, nurtured",
      text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for her help.",
      stars: 5,
      author: "Eliot",
      location: "Weave Studios – Kai Tak",
      image: "image3.jpg",
    },
  ];

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h2>Reviews</h2>
        <p>What people says about Golobe facilities</p>
        <button className="see-all-btn">See All</button>
      </div>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-content">
              <h3>{`“${review.quote}”`}</h3>
              <p>{review.text}</p>
              <p className="view-more">View more</p>
              <div className="review-stars">
                {"★".repeat(review.stars)}
              </div>
              <p className="review-author">
                <strong>{review.author}</strong> <br /> {review.location}
              </p>
            </div>
            <img src={review.image} alt={review.quote} className="review-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
