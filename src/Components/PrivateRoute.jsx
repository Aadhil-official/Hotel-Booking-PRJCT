// src/components/PrivateRoute.js

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Correct path

const PrivateRoute = ({ children, requiredRole }) => {
    const { user } = useContext(UserContext); // Access user from context

    if (!user) {
        // If user is not logged in, redirect to login
        return <Navigate to="/login" />;
    }

    if (requiredRole && user.role !== requiredRole) {
        // If user does not have the required role, redirect to unauthorized page
        return <Navigate to="/unauthorized" />;
    }

    // If user is authenticated and has the required role, render the component
    return children;
};

export default PrivateRoute;
