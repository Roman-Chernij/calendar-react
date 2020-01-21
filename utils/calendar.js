const moment = require('moment');

function getCalendarFullYear() {

}

function getCalendarFullMonth(dateNow) {
  const newDate = moment(dateNow);
  const startDay = newDate.clone().startOf('month').startOf('week');
  const endDay = newDate.clone().endOf('month').endOf('week');

  const date = startDay.clone().subtract(1, 'day');
  return recursiveCreateCalendar(endDay, date, newDate);
}

function recursiveCreateCalendar(endDay, date, newDate) {
  const calendar = [];
  while (date.isBefore(endDay, 'day')) {
    calendar.push(Array(7).fill(0).map(() => generateDay(date, newDate)));
  }
  return calendar;
}

function generateDay(date, newDate) {
  const value = date.add(1, 'day').clone().format();
  const active = moment().isSame(value, 'date');
  const disabled = !newDate.isSame(value , 'month');
  const selected = newDate.isSame(value, 'date');
  return {active, disabled, selected, value}
}

module.exports = {
  getCalendarFullYear,
  getCalendarFullMonth
};
