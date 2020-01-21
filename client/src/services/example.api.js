import axios from 'axios';
import { LoaderService } from './loader.service';
import { AuthService } from './auth.service';
import PubSub from 'pubsub-js';
import { eventNames } from '../constants/eventNames';
import * as jwtDecode from 'jwt-decode';

let refreshTokenTimeout;

export default class ApiService {
  constructor(baseUrl, withCredentials = true) {
    this.instance = axios.create();
    this.baseUrl = baseUrl || process.env.REACT_APP_SERVER_URL;
    this.withCredentials = withCredentials;
    useInterceptors(this.instance);
  }

  get(path = '', params = {}) {
    return this.instance.get(`${this.baseUrl}${path}`, this.getConfig(params));
  }

  post(path = '', data) {
    return this.instance.post(`${this.baseUrl}${path}`, data, this.getConfig());
  }

  put(path = '', data) {
    return this.instance.put(`${this.baseUrl}${path}`, data, this.getConfig());
  }

  patch(path = '', data) {
    return this.instance.patch(`${this.baseUrl}${path}`, data, this.getConfig());
  }

  delete(path) {
    return this.instance.delete(`${this.baseUrl}${path}`, this.getConfig());
  }

  getConfig(params = {}) {
    return {
      params,
      headers: this.withCredentials && {
        Authorization: 'Bearer ' + AuthService.token
      }
    };
  }

  startRefreshTokenTimer() {
    if (refreshTokenTimeout) {
      clearTimeout(refreshTokenTimeout);
    }
    const decodedToken = jwtDecode(AuthService.refreshToken);
    const oneMinute = 6e4;
    const refreshTokenDelay = decodedToken.exp * 1e3 - new Date().getTime();
    if (refreshTokenDelay < oneMinute) {
      getRefreshToken();
    } else {
      refreshTokenTimeout = setTimeout(() => {
        getRefreshToken();
      }, refreshTokenDelay - oneMinute);
    }
  }
}

function useInterceptors(instance = axios) {
  createRequestInterceptor(instance);
  createResponseInterceptor(instance);
}

let isRefreshing = false;
let subscribers = [];
let refreshTokenAttempts = 0;
let maxRefreshTokenAttempts = 5;

function createRequestInterceptor(instance) {
  instance.interceptors.request.use(
    config => {
      // Do something before request is sent
      // PubSub.publish(eventNames.checkSsoToken);
      return config;
    },
    error => {
      // Do something with request error
      console.log(error);
      return Promise.reject(error);
    }
  );
}

function createResponseInterceptor(instance) {
  instance.interceptors.response.use(
    response => {
      const originalRequest = response.config;

      if (response.data.error && response.data.error.code === 401) {
        return handleErrorResponse(originalRequest);
      }

      return response.data;
    },
    error => {
      LoaderService.hide();
      console.log(error);
      const originalRequest = error.config;

      if (error.response && error.response.status === 401) {
        return handleErrorResponse(originalRequest);
      }
      // Reject promise if usual error
      return Promise.reject(error);
    }
  );
}

function handleErrorResponse(originalRequest) {
  if (!isRefreshing) {
    isRefreshing = true;
    getRefreshToken();
  }

  return new Promise(resolve => {
    subscribeTokenRefresh(token => {
      originalRequest.headers.Authorization = `Bearer ${token}`;
      resolve(axios(originalRequest));
    });
  }).then(res => res.data);
}

function getRefreshToken() {
  const refreshToken = AuthService.refreshToken;
  if (!refreshToken && refreshTokenAttempts <= maxRefreshTokenAttempts) {
    refreshTokenAttempts++;
    return setTimeout(() => getRefreshToken(), 1000);
  }
  refreshTokenAttempts = 0;
  axios
    .post(process.env.REACT_APP_SSO_API_URL + '/api/refresh', { refreshToken })
    .then(res => {
      const { data } = res;
      isRefreshing = false;
      onRefreshed(data.access_token);
      AuthService.token = data.access_token;
      AuthService.refreshToken = data.refresh_token;
      PubSub.publish(eventNames.setSsoToken, data);
      subscribers = [];
    })
    .catch(error => {
      AuthService.globalLogout();
    });
}

function subscribeTokenRefresh(cb) {
  subscribers.push(cb);
}

function onRefreshed(token) {
  subscribers.map(cb => cb(token));
}
