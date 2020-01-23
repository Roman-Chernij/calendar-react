import React from 'react';
import { mapServiceMethodToProps } from '../../../utils';

export const withProfileServiceConsumer = Consumer => mapMethodToProps => Wrapped => props => (
  <Consumer>
    {
      service => {
        const methods = mapServiceMethodToProps(mapMethodToProps, service);
        return <Wrapped {...props} {...methods} />
      }
    }
  </Consumer>
);
