export const trimForString = value => (value || '').trim();
export const mapServiceMethodToProps = (mapMethodToProps, service) => {
  let result = {};
  if (typeof mapMethodToProps === 'function') {
    try {
      result = mapMethodToProps(service)
    } catch (e) {
      result = {...service}
    }
  } else {
    result = {...service}
  }

  return result;
};
