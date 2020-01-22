import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { CalendarServiceConsumer } from '../../../../component/calendar-service-context';
import { convertParamsToQueryString, compose } from '../../../../utils';
import { useHttp } from '../../../../hooks';
import { Loader } from '../../../../component/loader/loader';
import { Container } from '../../../../component/container/container';
import { YearCalendar } from '../../../../component/calendar-view';

const ScheduleForYear = props => {
  const {date, fetchData} = props;
  const getData = useCallback(() => fetchData(convertParamsToQueryString({date, calendar: 'year'})), [fetchData, date]);
  const { loading, data, error } = useHttp(getData);

  const layoutLoading = () => <Loader />;
  const layoutData = () => (
    <Container>
      <YearCalendar data={data} />
    </Container>
  );
  const layoutError = () => <Loader />;
  return (
    <>
      { !loading && layoutLoading() }
      { loading && layoutData() }
      { error && layoutError() }
    </>

  )
};

const mapMethodToProps = service => ({
  fetchData: service.getCalendarForYear
});

const mapStateToProps = ({ date }) => ({date: moment(date).format('YYYY-MM-DD')})


export default compose(
  CalendarServiceConsumer(mapMethodToProps),
  connect(mapStateToProps)) (ScheduleForYear)
