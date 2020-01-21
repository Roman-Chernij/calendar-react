import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { CalendarServiceConsumer } from '../../../../component/calendar-service-context';
import { convertParamsToQueryString, compose } from '../../../../utils';
import { useHttp } from '../../../../hooks';

const ScheduleForYear = props => {
  const {date, fetchData} = props;
  const getData = useCallback(() => fetchData(convertParamsToQueryString({date, calendar: 'year'})), [fetchData, date]);
  const result = useHttp(getData);
  return (
    <div>year page</div>
  )
};

const mapMethodToProps = service => ({
  fetchData: service.getCalendarForYear
});

const mapStateToProps = ({ date }) => ({date: moment(date).format('YYYY-MM-DD')})


export default compose(
  CalendarServiceConsumer(mapMethodToProps),
  connect(mapStateToProps)) (ScheduleForYear)
