import React from 'react';
import moment from 'moment';

export const MonthRowItemCalendar = props => {
  const { item } = props;
  const classNames = ['month-calendar-row__btn'];
  item.disabled && classNames.push('disabled');
  return (
    <div className="month-calendar-row__item">
      <button className={ classNames.join(' ') } disabled={item.disabled}>
        { moment(item.value).format('DD') }
      </button>
    </div>
  )
};
