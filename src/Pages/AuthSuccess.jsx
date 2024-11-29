// src/Pages/AuthSuccess.jsx

import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Alert } from '@mui/material';
import { UserContext } from '../context/UserContext'; // Correct path

const AuthSuccess = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Access setUser from context

  useEffect(() => {
    // Fetch user data from backend
    axios.get('http://localhost:9191/api/auth/success', { withCredentials: true })
      .then(response => {
        const { name, email, role } = response.data;
        // Store user data in context
        setUser({ name, email, role });
        
        // Navigate based on role
        if (role === 'ADMIN') {
          navigate('/addHotel');
        } else {
          navigate('/bookroom');
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        // Optionally, redirect to login or show an error message
        navigate('/login');
      });
  }, [navigate, setUser]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <CircularProgress />
      <p>Authenticating...</p>
    </div>
  );
};

export default AuthSuccess;
