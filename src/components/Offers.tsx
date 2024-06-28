// Offers.tsx
import React from 'react';

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: number;
}

const offers: Offer[] = [
  { id: 1, title: 'Summer Sale', description: 'Up to 50% off on summer trips!', discount: 50 },
  { id: 2, title: 'Early Bird', description: 'Book early and save 20%', discount: 20 }
];

const Offers: React.FC = () => {
  return (
    <div>
      <h2>Special Offers</h2>
      {offers.map((offer) => (
        <div key={offer.id}>
          <h3>{offer.title}</h3>
          <p>{offer.description}</p>
          <p>Discount: {offer.discount}%</p>
        </div>
      ))}
    </div>
  );
};

export default Offers;
