import ApiService from './api.service';
import config from '../misc/config';

export default class ProfileService extends ApiService {

  getUserProfile = () => {
    return this.get(config.path.PROFILE);
  };

  updateProfile = body => {
    return this.patch(config.path.PROFILE)
  };

  removeProfile = () => {
    return this.delete(config.path.PROFILE)
  }
}
