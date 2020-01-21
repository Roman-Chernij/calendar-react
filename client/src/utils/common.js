export const trimForString = value => (value || '').trim();
export const mapServiceMethodToProps = (mapMethodToProps, service) => typeof mapMethodToProps === 'function' ? mapMethodToProps(service) : {...service};
