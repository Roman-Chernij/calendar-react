import React, { useEffect, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CalendarServiceProvider, ProfileServiceConsumer } from '../component/hoc-helpers';
import { connect } from 'react-redux';
import { compose } from '../utils'
import { useHttp } from '../hooks';
import { DayPage } from './calendar/pages/day-page/day-page';
import { MonthPage } from './calendar/pages/month-page/month-page';
import { YearPage } from './calendar/pages/year-page/year-page';
import { Account } from './calendar/pages/account/account';
import { AppToolbar } from '../component/app-toolbar/app-toolbar';

import { SET_PROFILE } from '../action-types';
import { getActionsByType } from '../actions';

const BasicLayout = ({ getProfile, ...rest }) => {
  const {data, loading, error } = useHttp(useCallback(() => getProfile(), [getProfile]));
  useEffect(() => {
    if (data) {
      rest[SET_PROFILE](data)
    }
    if (error) {
      rest[SET_PROFILE]()
    }
    return () => {
      rest[SET_PROFILE]()
    }
  }, [loading]);
  return (
    <>
      <AppToolbar />
      <main className="main">
        <CalendarServiceProvider>
          <Switch>
            <Route exact path="/month" render={() => <MonthPage />} />
            <Route exact path="/year" render={() => <YearPage />} />
            <Route exact path="/day" render={() => <DayPage />} />
            <Route exact path="/day/:date" render={() => <DayPage />} />
            <Route exact path="/account" render={() => <Account />} />
            <Redirect to={{pathname: '/month'}} />
          </Switch>
        </CalendarServiceProvider>
      </main>
    </>
  )
};

const mapMethodToProps = service => ({
  getProfile: service.getUserProfile,
});

const mapDispatchToProps = {
  [SET_PROFILE]: getActionsByType(SET_PROFILE)
};

export default compose(
  ProfileServiceConsumer(mapMethodToProps),
  connect(()=> ({}), mapDispatchToProps)
)(BasicLayout);
