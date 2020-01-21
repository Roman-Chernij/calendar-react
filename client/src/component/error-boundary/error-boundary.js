import React, { Component } from 'react';

export default class ErrorBoundary extends Component{

  state = {
    hasError: false,
    errorInfo: null,
    error: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState(
      state => ({
        ...state,
        hasError: true,
        errorInfo,
        error
      }),
      () => {
        console.log('errorInfo', errorInfo);
        console.log('error', error);
      })
  }

  render() {
    const { hasError } = this.state;

    return hasError ? <div> SOME ERROR </div> : this.props.children;
  }
}
