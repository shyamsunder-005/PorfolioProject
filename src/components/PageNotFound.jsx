import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PageNotFound = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/users/get-user-data');
        setUserData(response.data); 
      } catch (err) {
        setError(err.message); 
      }
    };
    fetchUserData();
  }, []); 

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      {error && <p>Error: {error}</p>}
      {userData ? (
        <div>
          <h2>User Data:</h2>
          <p><strong>Name:</strong> {userData.Name}</p>
          <p><strong>Username:</strong> {userData.UserName}</p>
          <p><strong>DOB:</strong> {userData.DOB}</p>
          <p><strong>Address:</strong> {userData.Address}</p>
          <p><strong>Email ID:</strong> {userData.EmailID}</p>
          <p><strong>Phone No:</strong> {userData.PhoneNo}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default PageNotFound;
