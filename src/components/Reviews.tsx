// Reviews.tsx
import React, { useState } from 'react';

interface Review {
  id: number;
  user: string;
  comment: string;
  rating: number;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddReview = () => {
    const newReview = { id: Date.now(), user, comment, rating };
    setReviews([...reviews, newReview]);
    setUser('');
    setComment('');
    setRating(0);
  };

  return (
    <div>
      <h2>Reviews</h2>
      <div>
        {reviews.map((review) => (
          <div key={review.id}>
            <h4>{review.user}</h4>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </div>
      <h3>Add a review</h3>
      <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <textarea
        placeholder="Your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input
        type="number"
        max={5}
        min={0}
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <button onClick={handleAddReview}>Submit Review</button>
    </div>
  );
};

export default Reviews;
