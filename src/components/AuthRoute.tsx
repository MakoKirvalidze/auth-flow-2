import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

interface AuthRouteProps {
  element: React.ComponentType;
  path: string;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ element: Component }) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { isAuthenticated } = authContext;

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default AuthRoute;
