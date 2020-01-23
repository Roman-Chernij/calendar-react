import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import ErrorBoundary from './component/error-boundary/error-boundary';
import ThemeWrapper from './component/theme-wrapper/theme-wrapper';
import { AuthServiceProvider } from './component/hoc-helpers'

import store from './store';

import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <AuthServiceProvider>
        <ThemeWrapper>
          <Router>
            <App />
          </Router>
        </ThemeWrapper>
      </AuthServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'));
