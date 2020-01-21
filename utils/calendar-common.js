const moment = require('moment');

function generateDays(date, newDate) {
  const value = date.add(1, 'day').clone().format();
  const active = moment().isSame(value, 'date');
  const disabled = !newDate.isSame(value , 'month');
  const selected = newDate.isSame(value, 'date');
  return {active, disabled, selected, value}
}

module.exports = {
  generateDays
};
