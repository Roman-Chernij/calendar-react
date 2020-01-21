const moment = require('moment');

function createStartingParametersDate (date) {
  return (startOfArr, endOfAff, subtractArr) => {
    const startDay = reduceGetData(date, 'startOf', startOfArr);
    const newDate = moment(date);
    return (
      {
        newDate,
        startDay,
        endDay: reduceGetData(date,'endOf', endOfAff),
        date: startDay.clone().subtract(...subtractArr)
      }
    )
  }
}

function reduceGetData(dateString, method, arr = []) {
  const dateNow = moment(dateString);
  if (!dateNow[method]) throw Error(`can't found the method "${method}" in the moment's library`);
  return arr.reduce((acc, item) => {
    return acc.clone()[method](item);
  }, dateNow)
}

module.exports = {
    createStartingParametersDate
};
