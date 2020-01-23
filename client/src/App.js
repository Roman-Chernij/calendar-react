import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Login from './views/Login/Login';
import BasicLayout from './views/BasicLayout';
import { AuthServiceConsumer, ProfileServiceProvider } from './component/hoc-helpers';
import compose from './utils/compose';

function App({isAuth}) {
  const [status, trigger] = useState(isAuth());

  const listenToken = () => {
    trigger(isAuth())
  };

  useEffect(() => {
    trigger(isAuth());
    window.addEventListener('storage', listenToken)
    return () => {
      window.removeEventListener('storage', listenToken)
    }
  }, []);

  const publicRouter = () => (
    <>
      <Route path="/login" exact render={ props => <Login {...props} /> }  />
      <Redirect to="/login" />
    </>
  );
  const privetRouter = () => (
    <>
      <Route path="/" render={ props => <BasicLayout {...props} />} />
      <Route exact path="/login" render={ props => <Login {...props} /> }  />
    </>
  );

  return (
    <ProfileServiceProvider>
      <Switch>
        { status ? privetRouter() : publicRouter() }
      </Switch>
    </ProfileServiceProvider>
  );
}

const mapMethodToProps = service => ({
  isAuth: service.isAuthorized,
});

export default compose(
  AuthServiceConsumer(mapMethodToProps),
  withRouter)(App);
