import React from 'react';
import { MonthCalendar } from './month-calendar';

export const YearCalendar = props => {
  const { data } = props;
  if (!data) return null;
  return (
    <div className="year-calendar">
      {data.map(month => (
        <div key={Math.random()} className="year-calendar__item">
          <MonthCalendar data={month} />
        </div>
      ))}
    </div>
  )
};
