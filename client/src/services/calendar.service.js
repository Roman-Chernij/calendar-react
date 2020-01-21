import ApiService from './api.service';
import config from '../misc/config';

export default class CalendarService extends ApiService {

  getCalendar = (apiUrl, queryParams) => {
    const url = queryParams ? `${apiUrl}?${queryParams}` : apiUrl;
    return this.get(url)
  };

  getCalendarForMonth = queryParams => {
    return this.getCalendar(config.path.CALENDAR, queryParams);
  };

  getCalendarForYear = (queryParams) => {
    return this.getCalendar(config.path.CALENDAR, queryParams);
  };

  getEventForDay = (queryParams) => {
    return this.getCalendar(config.path.CALENDAR, queryParams);
  };

  createEvent(body) {
    return this.post(config.path.EVENT, body)
  }

  updateEvent(id, body) {
    return this.patch(`${config.path.EVENT}/${id}`, body)
  }

  deleteEvent(id) {
    return this.delete(`${config.path.EVENT}/${id}`)
  }
}
