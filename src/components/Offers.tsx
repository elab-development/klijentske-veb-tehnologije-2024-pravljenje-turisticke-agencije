// src/components/Offers.tsx
import React, { useState } from 'react';
import '../styles/Offers.css';

interface Offer {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const offersData: Offer[] = [
  {
    id: 1,
    title: 'Summer Sale in Greece',
    description: 'Enjoy a wonderful summer vacation in Greece with 20% off!',
    price: '$999',
    imageUrl: 'https://th.bing.com/th/id/OIP.pUke3Mt5Puik7XdTraJnsAHaE7?rs=1&pid=ImgDetMain'
  },
  {
    id: 2,
    title: 'Winter Wonderland in Switzerland',
    description: 'Experience the magic of winter in Switzerland with 15% discount!',
    price: '$1299',
    imageUrl: 'https://th.bing.com/th/id/R.863a75ab8f0c3b11135296ec521d887b?rik=VHvIGoowKbh0sQ&riu=http%3a%2f%2fcdn.theculturetrip.com%2fwp-content%2fuploads%2f2015%2f04%2f18881777463_4174e0e4c5_k.jpg&ehk=jMl08b%2bFIu1H2vw9AVhlTcbzeJVHfJSS88GNbBYuhzE%3d&risl=&pid=ImgRaw&r=0'
  },
  // Add more offers here
];

const Offers: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const handleBookNow = (offerTitle: string) => {
    setNotification(`You have booked the offer: ${offerTitle}`);
    setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="offers">
      <h2>Special Offers</h2>
      {notification && <div className="notification">{notification}</div>}
      {offersData.map((offer) => (
        <div key={offer.id} className="offer">
          <img src={offer.imageUrl} alt={offer.title} />
          <div className="offer-details">
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p className="offer-price">{offer.price}</p>
            <button onClick={() => handleBookNow(offer.title)}>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
