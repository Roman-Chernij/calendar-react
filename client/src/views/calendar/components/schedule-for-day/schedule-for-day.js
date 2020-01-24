import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { CalendarServiceConsumer } from '../../../../component/hoc-helpers';
import { compose, convertParamsToQueryString } from '../../../../utils';
import { connect } from 'react-redux';
import moment from 'moment';
import { useHttp } from '../../../../hooks';
import { EventModal } from '../event-modal/event-modal';

const ScheduleForDay = props => {
  const { date, fetchData, match } = props;
  const getData = useCallback(() => fetchData(convertParamsToQueryString({date, calendar: 'day'})), [fetchData, date]);
  const result = useHttp(getData);
  console.log(props)




  return (
    <>
      <EventModal />
    </>
  )
};

const mapMethodToProps = service => ({
  fetchData: service.getEventForDay
});

const mapStateToProps = ({ date }) => ({
  date: moment(date).format('YYYY-MM-DD')
});


export default compose(
  withRouter,
  CalendarServiceConsumer(mapMethodToProps),
  connect(mapStateToProps))(ScheduleForDay)
