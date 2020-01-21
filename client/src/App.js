import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Login from './views/Login/Login';
import { BasicLayout } from './views/BasicLayout';
import { AuthServiceConsumer } from './component/auth-service-context';
import compose from './utils/compose';

function App(props) {
// function App({isAuth}) {
  // const [status, trigger] = useState(isAuth());
  const [status, trigger] = useState(true);

  // const listenToken = () => {
  //   trigger(isAuth())
  // };

  useEffect(() => {
    console.log('add event')
    // window.addEventListener('storage', listenToken)
  });
  useEffect(() => () => {
    console.log('remove event')
    // window.removeEventListener('storage', listenToken)
  });

  const publicRouter = () => (
    <>
      <Route path="/login" exact render={ props => <Login {...props} /> }  />
      <Redirect to="/login" />
    </>
  );
  const privetRouter = () => <Route exact render={ props => <BasicLayout {...props} />} />;

  return (
    <Switch>
      {
        status ? privetRouter() : publicRouter()
      }
    </Switch>
  );
}

const mapMethodToProps = service => ({
  isAuth: service.isAuthorized,
});


export default compose(
  AuthServiceConsumer(mapMethodToProps),
  withRouter)(App);
