const { createStartingParametersDate } = require('./calendar-helpers');
const { getCalendarFullMonth } = require('./calendar-full-month');

function getCalendarFullYear(dateNow) {
  const {
    endDay,
    date } = createStartingParametersDate(dateNow)(['year', 'month'], ['year', 'month'], [1, 'month']);
  return createCalendarForYear(endDay, date);
}

function createCalendarForYear(endDay, date) {
  const calendarFullYear = [];
  while (date.isBefore(endDay, 'month')) {
    const value = date.add(1, 'month').clone().format();
    const scheduleForMonth = getCalendarFullMonth(value);
    calendarFullYear.push({
      monthName: date.format('MMMM'),
      schedule: scheduleForMonth
    })
  }
  return calendarFullYear;
}

module.exports = {
  getCalendarFullYear
};
