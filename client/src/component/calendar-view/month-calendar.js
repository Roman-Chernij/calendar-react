import React from 'react';
import { MonthRowCalendar } from './month-row-calendar';
import Typography from '@material-ui/core/Typography';

export const MonthCalendar = props => {
  const { data } = props;
  if (!data && !Array.isArray(data.schedule)) return null;
  const layoutMonthName = () => (
    <Typography component="h2" className="month-name">
      { data.monthName }
    </Typography>
  );
  const { monthName, schedule} = data;
  return (
    <div className="month-calendar">
      { monthName && layoutMonthName() }
      {
        Array.isArray(schedule) && schedule.map(item => <MonthRowCalendar key={Math.random()} row={item} />)
      }
    </div>
  )
};
