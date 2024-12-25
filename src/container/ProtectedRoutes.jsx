import React from 'react';
import { Route, Navigate,Routes } from 'react-router-dom';
import { useAuth } from '../auth/authcontext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user, loading } = useAuth();
  console.log('User in    ', user);
  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route
        {...rest}
        element={user ? Component : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default ProtectedRoute;
