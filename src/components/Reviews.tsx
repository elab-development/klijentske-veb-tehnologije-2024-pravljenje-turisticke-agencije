<<<<<<< HEAD
// src/components/Reviews.tsx
import React, { useState } from 'react';
import '../styles/Reviews.css';
=======
<<<<<<< HEAD
// src/components/Reviews.tsx
import React, { useState } from 'react';
import '../styles/Reviews.css';
=======
<<<<<<< HEAD
// src/components/Reviews.tsx
import React, { useState } from 'react';
import '../styles/Reviews.css';
=======
<<<<<<< HEAD
// src/components/Reviews.tsx
import React, { useState } from 'react';
import '../styles/Reviews.css';
=======
// Reviews.tsx
import React, { useState } from 'react';
>>>>>>> d7750eddf78dbe95587338c41679a998cf492b56
>>>>>>> 09043f9cc0d4f3a7795131c63c3d68b0f816952e
>>>>>>> d9a34be3c399990218a7d1d456704df98535c8c3
>>>>>>> edee06dc20963d74d3f6f008353dbd84c0a56036

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 09043f9cc0d4f3a7795131c63c3d68b0f816952e
>>>>>>> d9a34be3c399990218a7d1d456704df98535c8c3
>>>>>>> edee06dc20963d74d3f6f008353dbd84c0a56036
    <div className="reviews">
      <h2>Reviews</h2>
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <h4>{review.user}</h4>
            <p>{review.comment}</p>
            <p className="rating">Rating: {review.rating}</p>
          </div>
        ))}
      </div>
      <div className="add-review">
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
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
>>>>>>> d7750eddf78dbe95587338c41679a998cf492b56
>>>>>>> 09043f9cc0d4f3a7795131c63c3d68b0f816952e
>>>>>>> d9a34be3c399990218a7d1d456704df98535c8c3
>>>>>>> edee06dc20963d74d3f6f008353dbd84c0a56036
    </div>
  );
};

export default Reviews;
