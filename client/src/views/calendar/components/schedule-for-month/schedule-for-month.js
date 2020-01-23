import React, { useCallback } from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import { useHttp } from '../../../../hooks';
import { convertParamsToQueryString, compose } from '../../../../utils';
import { CalendarServiceConsumer } from '../../../../component/hoc-helpers';
import { Loader } from '../../../../component/loader/loader';
import { MonthCalendar } from '../../../../component/calendar-view';
import { Container } from '../../../../component/container/container';

const ScheduleForMonth = props => {
  const { date, fetchData } = props;
  const getData = useCallback(() => fetchData(convertParamsToQueryString({date, calendar: 'month'})), [fetchData, date]);
  const { loading, data } = useHttp(getData);
  return loading ? <Container><MonthCalendar data={data} /></Container> : <Loader />
};

const mapMethodToProps = service => ({
  fetchData: service.getCalendarForMonth
});

const mapStateToProps = ({date}) => ({date: moment(date).format('YYYY-MM-DD')});

export default compose(
  CalendarServiceConsumer(mapMethodToProps),
  connect(mapStateToProps),
)(ScheduleForMonth)
