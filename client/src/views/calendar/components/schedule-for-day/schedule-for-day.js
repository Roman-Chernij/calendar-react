import React from 'react';
import { CalendarServiceConsumer } from '../../../../component/calendar-service-context';

const ScheduleForDay = () => (
<div>day page </div>
);

const mapMethodToProps = service => ({
  fetchData: service.getEventForDay
});

export default CalendarServiceConsumer(mapMethodToProps)(ScheduleForDay)
