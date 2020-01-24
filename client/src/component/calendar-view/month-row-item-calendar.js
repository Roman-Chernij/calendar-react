import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const MonthRowItemCalendar = props => {
  const { item, history } = props;
  const classNames = ['month-calendar-row__btn'];
  item.disabled && classNames.push('disabled');
  const jumpToCurrentDate = () => history.push(`/day/${moment(item.value).format('YYYY-MM-DD')}`);
  return (
    <div className="month-calendar-row__item">
      <button 
        onClick={jumpToCurrentDate}
        className={ classNames.join(' ') }
        disabled={item.disabled}>
        { moment(item.value).format('DD') }
      </button>
    </div>
  )
};

export default withRouter(MonthRowItemCalendar)
