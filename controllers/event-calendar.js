const config = require('../config/default');
const {getCalendarFullMonth, getCalendarFullYear} = require('../utils');

module.exports.getCalendar = async (req, res) => {
  const queryParams = req.query;
  if (queryParams && queryParams.date) {
    console.log('date', queryParams.date)
    const calendar = getCalendarFullMonth(new Date(queryParams.date));
    res.status(200).json(calendar)
  } else {
    res.status(404).json({
      massage: 'not found field date in parameters'
    })
  }
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
