import React from 'react'
import { Navigate } from 'react-router-dom';

const PublicRoute = ({
  isAuthenticated,
  children
}) => {
  if (!isAuthenticated) return children;

  return <Navigate to='/' replace />
}

export default PublicRoute
