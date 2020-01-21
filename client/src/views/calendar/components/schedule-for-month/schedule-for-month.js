import React, { useCallback } from 'react';
import { CalendarServiceConsumer } from '../../../../component/calendar-service-context';
import compose from '../../../../utils/compose';
import { connect } from 'react-redux'
import useHttp from '../../../../hooks/useHttp';
import { convertParamsToQueryString } from '../../../../utils';

const ScheduleForMonth = props => {
  const { date, fetchData } = props;
  const newDate = new Date(date);
  const dateString = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
  const getData = useCallback(() => fetchData(convertParamsToQueryString({date: dateString, calendar: 'month'})), [fetchData, dateString]);
  const result = useHttp(getData);


  return(
    <div>month page</div>
  )
};

const mapMethodToProps = service => ({
  fetchData: service.getCalendarForMonth
});

const mapStateToProps = ({date}) => ({date});

export default compose(
  CalendarServiceConsumer(mapMethodToProps),
  connect(mapStateToProps)
)(ScheduleForMonth)
