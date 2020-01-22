import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CalendarServiceProvider } from '../component/calendar-service-context';
import { DayPage } from './calendar/pages/day-page/day-page';
import { MonthPage } from './calendar/pages/month-page/month-page';
import { YearPage } from './calendar/pages/year-page/year-page';
import { Account } from './calendar/pages/account/account';
import { AppToolbar } from '../component/app-toolbar/app-toolbar';

export const BasicLayout = () => {
  return (
    <>
      <AppToolbar />
      <main className="main">
        <CalendarServiceProvider>
          <Switch>
            <Route exact path="/month" render={() => <MonthPage />} />
            <Route exact path="/year" render={() => <YearPage />} />
            <Route exact path="/day" render={() => <DayPage />} />
            <Route exact path="/account" render={() => <Account />} />
            <Redirect to={{pathname: '/month'}} />
          </Switch>
        </CalendarServiceProvider>
      </main>
    </>
  )
};
