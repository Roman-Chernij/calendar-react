const { createStartingParametersDate } = require('./calendar-helpers');

function getCalendarFullDay(currentDate) {
  const {
    endDay,
    startDay } = createStartingParametersDate(currentDate)(['day', 'hour'], ['day', 'hour'], [1, 'hour']);
  return createCalendarForDay(startDay, endDay)
}

function createCalendarForDay(startDay, endDay) {
  const time = [];
  while (endDay.isAfter(startDay, 'hour')) {
    const TimeClone = startDay.add(1, 'hour').clone();
    const timeCurrentFormat = TimeClone.format('H:mm A')
    time.push(timeCurrentFormat);
  }
  return time
}

module.exports = {
  getCalendarFullDay
};
