<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d9a34be3c399990218a7d1d456704df98535c8c3
// src/components/UserProfile.tsx
import React, { useState } from 'react';
import '../styles/UserProfile.css';

const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('Travel enthusiast. Love exploring new places and cultures.');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save the updated profile information
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <img src="https://via.placeholder.com/100" alt="User Avatar" />
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <button className="edit-button" onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Bio:</strong> {bio}</p>
          <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>
        </>
      )}
<<<<<<< HEAD
=======
=======
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
>>>>>>> 09043f9cc0d4f3a7795131c63c3d68b0f816952e
>>>>>>> d9a34be3c399990218a7d1d456704df98535c8c3
    </div>
  );
};

export default UserProfile;
