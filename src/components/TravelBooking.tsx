// src/components/TravelBooking.tsx
import React, { useState } from 'react';
import '../styles/TravelBooking.css';

interface TravelBookingProps {
  destination: string;
}

const TravelBooking: React.FC<TravelBookingProps> = ({ destination }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = () => {
    alert(`Booking confirmed for ${name} to ${destination} on ${date}`);
    // Here you would typically send this data to a backend service
  };

  return (
    <div className="travel-booking">
      <h2>Book your trip to {destination}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default TravelBooking;
