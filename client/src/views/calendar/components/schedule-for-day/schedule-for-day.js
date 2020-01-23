import React, { useCallback } from 'react';
import { CalendarServiceConsumer } from '../../../../component/hoc-helpers';
import { compose, convertParamsToQueryString } from '../../../../utils';
import { connect } from 'react-redux';
import moment from 'moment';
import { useHttp } from '../../../../hooks';

const ScheduleForDay = props => {
  const { date, fetchData } = props;
  const getData = useCallback(() => fetchData(convertParamsToQueryString({date, calendar: 'day'})), [fetchData, date]);
  const result = useHttp(getData);

  return (
    <div>day page </div>
  )
};

const mapMethodToProps = service => ({
  fetchData: service.getEventForDay
});

const mapStateToProps = ({ date }) => ({
  date: moment(date).format('YYYY-MM-DD')
});


export default compose(
  CalendarServiceConsumer(mapMethodToProps),
  connect(mapStateToProps))(ScheduleForDay)
