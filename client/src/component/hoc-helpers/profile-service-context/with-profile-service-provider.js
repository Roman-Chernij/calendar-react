import React from 'react';
import ProfileService from '../../../services/profile.service';

export const withProfileServiceProvider = Provider => props => {
  const calendarService = new ProfileService();
  return <Provider value={calendarService} {...props} />
};
