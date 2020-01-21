import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Switch, Route, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { CalendarServiceProvider } from '../component/calendar-service-context';
import { DayPage } from './calendar/pages/day-page/day-page';
import { MonthPage } from './calendar/pages/month-page/month-page';
import { YearPage } from './calendar/pages/year-page/year-page';

export const BasicLayout = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar className="align-right">
          <Button color="secondary">Log Out</Button>
        </Toolbar>
      </AppBar>
      <main className="main">
        <CalendarServiceProvider>
          <Switch>
            <Route exact path="/month" render={() => <MonthPage />} />
            <Route exact path="/year" render={() => <YearPage />} />
            <Route exact path="/day" render={() => <DayPage />} />
            <Redirect to={{pathname: '/month'}} />
          </Switch>
        </CalendarServiceProvider>
      </main>
    </>
  )
};
