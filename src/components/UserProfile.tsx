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
    </div>
  );
};

export default UserProfile;
