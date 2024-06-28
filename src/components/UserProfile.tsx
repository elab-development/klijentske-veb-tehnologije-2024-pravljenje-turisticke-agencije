// UserProfile.tsx
import React, { useState } from 'react';

interface UserProfile {
  name: string;
  email: string;
  bookings: string[];
}

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john@example.com',
    bookings: ['Paris', 'London']
  });

  const handleUpdateProfile = (name: string, email: string) => {
    setProfile({ ...profile, name, email });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <h3>Bookings</h3>
      <ul>
        {profile.bookings.map((booking, index) => (
          <li key={index}>{booking}</li>
        ))}
      </ul>
      <button onClick={() => handleUpdateProfile('Jane Doe', 'jane@example.com')}>
        Update Profile
      </button>
    </div>
  );
};

export default UserProfile;
