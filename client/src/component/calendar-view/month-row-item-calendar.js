import React from 'react';
import moment from 'moment';

export const MonthRowItemCalendar = props => {
  const { item } = props;
  return (
    <div className="month-calendar-row__item">
      <button className="month-calendar-row__btn" disabled={item.disabled}>
        { moment(item.value).format('DD') }
      </button>
    </div>
  )
};
