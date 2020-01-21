const convertParamsToQueryString = params => {
  if (typeof params !== 'object') {
    throw Error('the argument has to be with type object');
  }
  return Object.keys(params).reduce((acc, item, index, array) => {
    const test = (index && index < array.length) ? `$${item}=${params[item]}` : `${item}=${params[item]}`
    return `${acc}${test}`
  }, '')
};
export default convertParamsToQueryString;
