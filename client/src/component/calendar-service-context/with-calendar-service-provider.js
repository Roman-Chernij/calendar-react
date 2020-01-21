import React from 'react';
import CalendarService from '../../services/calendar.service';

export const withCalendarServiceProvider = Provider => props => {
  const calendarService = new CalendarService();
  return <Provider value={calendarService} {...props} />
};
