import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { CalendarServiceConsumer } from '../../../../component/hoc-helpers';
import { compose, convertParamsToQueryString } from '../../../../utils';
import { connect } from 'react-redux';
import moment from 'moment';
import { useHttp } from '../../../../hooks';
import { Loader } from '../../../../component/loader/loader';
import { Container } from '../../../../component/container/container';
import { DayCalendar } from '../../../../component/calendar-view';

const ScheduleForDay = props => {
  const {date, fetchData} = props;
  const getData = useCallback(() => fetchData(convertParamsToQueryString({date, calendar: 'day'})), [fetchData, date]);
  const {data, loading} = useHttp(getData);

  const view = (loading && data) ?
    <Container>
      <DayCalendar data={data}/>
    </Container> :
    <Loader/>;
  return view
};

const mapMethodToProps = service => ({
  fetchData: service.getEventForDay
});

const mapStateToProps = ({date}) => ({
  date: moment(date).format('YYYY-MM-DD')
});


export default compose(
  withRouter,
  CalendarServiceConsumer(mapMethodToProps),
  connect(mapStateToProps))(ScheduleForDay)
