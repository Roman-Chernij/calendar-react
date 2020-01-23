import React from 'react';

export const WithAuthServiceConsumer = Consumer => mapMethodToProps => Wrapped => {
  return props => (
    <Consumer>
      {
        service => {
          const method = typeof mapMethodToProps === 'function' ? mapMethodToProps(service) : {...service};
          return <Wrapped {...props} {...method} />
        }
      }
    </Consumer>
  )
};
