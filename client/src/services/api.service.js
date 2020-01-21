import axios from 'axios';

export default class ApiService {

  constructor() {
    this.instance = axios.create();
    this.baseUrl = process.env.REACT_APP_SERVER_URL;
    useInterceptors(this.instance);
  }

  get(path = '', params) {
    return this.instance.get(`${this.baseUrl}${path}`, params)
      .then(result => result.data)
      .catch(result => result.error.message);
  }

  post(path = '', body = {}) {
    return this.instance.post(`${this.baseUrl}${path}`, body)
      .then(result => result.data)
      .catch(result => result.error.message);
  }

  path(path = '', body = {}) {
    return this.instance.path(`${this.baseUrl}${path}`, body)
      .then(result => result.data)
      .catch(result => result.error.message)
  }

  delete(path = '') {
    return this.instance.delete(`${this.baseUrl}${path}`)
      .then(result => result.data)
      .catch(result => result.error.message)
  }
}

function useInterceptors(instance = axios) {
  createRequestInterceptor(instance);
  createResponseInterceptor(instance);
}

function createRequestInterceptor(instance) {}

function createResponseInterceptor(instance) {}
