import React from 'react';
import moment from 'moment';

export const MonthRowItemCalendar = props => {
  const { item } = props;
  const classNames = ['month-calendar-row__item'];
  item.disabled && classNames.push('disabled');
  return (
    <div className={ classNames.join(' ') }>
      <button className="month-calendar-row__btn" disabled={item.disabled}>
        { moment(item.value).format('DD') }
      </button>
    </div>
  )
};
