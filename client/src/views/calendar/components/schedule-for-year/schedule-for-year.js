import React from 'react';
import { CalendarServiceConsumer } from '../../../../component/calendar-service-context';

const ScheduleForYear = () => (
  <div>year page</div>
);

const mapMethodToProps = service => ({
  fetchData: service.getCalendarForYear
});

export default CalendarServiceConsumer(mapMethodToProps)(ScheduleForYear)
