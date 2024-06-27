import React from 'react';
import UserProfile from '@/models/UserProfileCard';

interface UserProfileCardProps {
  user: UserProfile;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <h3>Booking History:</h3>
      <pre>{user.getBookingHistory()}</pre>
    </div>
  );
};

export default UserProfileCard;
