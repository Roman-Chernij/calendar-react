import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { AuthServiceConsumer } from '../../component/auth-service-context';
import queryString from 'query-string';

import './login.scss';

const Login = (props) => {
  const {login, setToken, location, history} = props;
  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    if (queryParams && queryParams.token) {
      setToken(queryParams.token);
      history.push('/')
    }
  });

  return (
    <div className="login-container">
      <Button variant="outlined" color="primary" onClick={login}>
        Sing In
      </Button>
    </div>
  )
};

const mapMethodToProps = service => ({
  login: service.login,
  setToken: service.setToken
});

export default AuthServiceConsumer(mapMethodToProps)(Login)
