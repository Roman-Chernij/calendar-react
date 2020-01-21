const { generateDays } = require('./calendar-common');
const { createStartingParametersDate } = require('./calendar-helpers');

function getCalendarFullMonth(dateNow) {
  const {
    newDate,
    endDay,
    date } = createStartingParametersDate(dateNow)(['month', 'week'], ['month', 'week'], [1, 'day']);
  return createCalendarForMonth(endDay, date, newDate);
}

function createCalendarForMonth(endDay, date, newDate) {
  const calendar = [];
  while (date.isBefore(endDay, 'day')) {
    calendar.push(Array(7).fill(0).map(() => generateDays(date, newDate)));
  }
  return calendar;
}

module.exports = {
  getCalendarFullMonth
};
