import React from 'react';
import { MonthRowCalendar } from './month-row-calendar';

export const MonthCalendar = props => {
  const { data } = props;
  if (!data) return null
  return (
    <div className="month-calendar">
      {
        data.map(item => <MonthRowCalendar key={Math.random()} row={item} />)
      }
    </div>
  )
};
