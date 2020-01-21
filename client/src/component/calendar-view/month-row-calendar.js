import React from 'react';
import { MonthRowItemCalendar } from './month-row-item-calendar';

export const MonthRowCalendar = props => {
  const { row } = props;
  return (
    <div className="month-calendar-row">
      { row.map(item => <MonthRowItemCalendar key={Math.random()} item={item} />) }
    </div>
  )
};
