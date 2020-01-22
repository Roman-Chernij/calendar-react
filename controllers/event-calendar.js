const config = require('../config/default');
const {
  getCalendarFullMonth,
  getCalendarFullYear,
  getCalendarFullDay } = require('../utils');

module.exports.getCalendar = async (req, res) => {
  const {date, calendar} = req.query;

  const currentDate = date ? new Date(date) : new Date();
  let result = null;

  if (!calendar) {
    result = getCalendarFullMonth(currentDate)
  }

  if ( calendar === 'day') {
    result = getCalendarFullDay(currentDate)
  } else if (calendar === 'year') {
    result = getCalendarFullYear(currentDate)
  } else {
    result = {
      monthName: null,
      schedule:  getCalendarFullMonth(currentDate)
    }
  }
  setTimeout(() => res.status(200).json(result), 5000)

  // if (queryParams && queryParams.date) {
  //   console.log('date', queryParams.date)
  //   const calendar = getCalendarFullMonth(new Date(queryParams.date));
  //   res.status(200).json(calendar)
  // } else {
  //   res.status(404).json({
  //     massage: 'not found field date in parameters'
  //   })
  // }
  console.log(req.query)

};

module.exports.updateEvent = async (req, res) => {
  res.status(200).json([])
};

module.exports.createEvent = async (req, res) => {
  res.status(200).json([])
};

module.exports.deleteEvent = async (req, res) => {
  res.status(200).json([])
};
