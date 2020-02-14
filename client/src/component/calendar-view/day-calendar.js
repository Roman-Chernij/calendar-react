import React from 'react';
import { EventModal } from '../../views/calendar/components/event-modal/event-modal';

export const DayCalendar = ({data}) => {

  return (
    <>
      <div>
        <ul className="time-list">
          {
            data.map(item => <li className="time-list__item" key={Math.random() * 1000}>{item}</li>)
          }
        </ul>
        <div />
      </div>
      <EventModal />
    </>
  )
};
