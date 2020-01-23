import React from 'react';
import { mapServiceMethodToProps } from '../../../utils';

export const withCalendarServiceConsumer = Consumer => mapMethodToProps => Wrapped => {

  return props => (
    <Consumer>
      {
        service => {
          const method = mapServiceMethodToProps(mapMethodToProps, service);
          return <Wrapped {...props} {...method} />
        }
      }
    </Consumer>
  )
};
