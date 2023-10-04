// Callback.js

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const history = useHistory();

  useEffect(() => {
    // Retrieve the access token or code from the URL
    const token = new URLSearchParams(window.location.search).get('token');

    if (token) {
      // Send the token to your backend for verification
      axios.post('/api/verify-token', { token })
        .then((response) => {
          if (response.data.isAuthenticated) {
            // User is authenticated, redirect to a protected route
            history.push('/protected');
          } else {
            // Authentication failed, handle accordingly
            history.push('/login');
          }
        })
        .catch((error) => {
          // Handle error
          console.error(error);
          history.push('/login');
        });
    } else {
      // Token is missing, handle accordingly
      history.push('/login');
    }
  }, [history]);

  return (
    <div>
      <p>Verifying...</p>
    </div>
  );
};

export default Callback;