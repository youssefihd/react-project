// Profile.jsx

import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Profile = () => {
  const { keycloak } = useKeycloak();

  const getUsername = () => {
    return keycloak.authenticated && keycloak.tokenParsed?.preferred_username;
  };

  const getUserRoles = () => {
    return keycloak.authenticated && keycloak.tokenParsed?.realm_access?.roles;
    // Replace 'roles' with 'authorities' or 'roles' based on your Keycloak configuration
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {keycloak.authenticated ? (
        <div>
          <p><strong>Username:</strong> {getUsername()}</p>
          <p><strong>Roles:</strong> {getUserRoles()?.join(', ')}</p>
          {/* Display other user profile information as needed */}
        </div>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
