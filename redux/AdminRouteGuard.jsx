// ProtectedRoute.jsx

import React from 'react';
import { Routes, Route } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, getUserRole } from './services/authSlice';
import NotFound from '../src/pages/404notfound';

const AdminRouteGuard = ({ component: Component, allowedRoles, ...rest }) => {
  const isUserAuthenticated = isAuthenticated();
  const userRole = getUserRole();

  // Check if the user is authenticated and has the allowed role
  const hasAllowedRole = allowedRoles.includes(userRole);

  return (
    <Routes>
    <Route
      {...rest}
      render={(props) =>
        isUserAuthenticated && hasAllowedRole ? (
          <Component {...props} />
        ) : (
        //   <Redirect to="/notfound" component={NotFound} />
        () => useNavigate("/notfound")
        )
      }
    />
    </Routes>
  );
};

export default AdminRouteGuard;
