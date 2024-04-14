// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token') ? true : false;

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
