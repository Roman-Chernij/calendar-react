import ApiService from './api.service';
import { trimForString } from '../utils';

export default class AuthService extends ApiService {

  login = async () => {
    window.location.href = 'http://localhost:5000/auth/google'
  };

  isAuthorized = () => {
    return !!trimForString(this.getToken());
  };

  listenToken = () => {
    console.log('listenToken');
    this.deleteToken()
  };

  setToken = token => {
    window.localStorage.setItem('token', token);
  };

  getToken = () => {
    return window.localStorage.getItem('token');
  };

  deleteToken = () => {
    window.localStorage.removeItem('token');
  };

  logout = async () => {
    console.log('<<<<<< logout >>>>>>')
    this.deleteToken();
  };
}
