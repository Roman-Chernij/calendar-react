const convertParamsToQueryString = params => {
  if (typeof params !== 'object') {
    throw Error('the argument has to be with type object');
  }
  return Object.keys(params).reduce((acc, item, index, array) => {
    const queryString = (index && index < array.length) ? `&${item}=${params[item]}` : `${item}=${params[item]}`;
    return `${acc}${queryString}`
  }, '')
};
export default convertParamsToQueryString;
