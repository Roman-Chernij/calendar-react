import React from 'react';
import AuthService from '../../services/auth.service';

export const WithAuthServiceProvider = Provider => props => {
  const authService = new AuthService();
  return <Provider value={authService}  {...props} />
};
