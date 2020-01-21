import React from 'react';
import './container.scss';

export const Container = props => (
  <div className="container">
    {props.children}
  </div>
);
