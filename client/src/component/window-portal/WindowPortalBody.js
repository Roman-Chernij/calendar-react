import React, {PureComponent} from 'react';
import { createPortal } from "react-dom";

export default class WindowPortalBody extends PureComponent {

  constructor(props) {
    super(props);
    this.externalWindow = null;
    this.containerEl = document.createElement('div');
  }

  componentDidMount() {
    this.externalWindow = window.open('http://localhost:5000/auth/google', '/auth/google', 'width=600,height=400,left=300,top=200');
    this.externalWindow.document.body.appendChild(this.containerEl);
    this.externalWindow.document.title = 'A React portal window';
    // copyStyles(document, this.externalWindow.document);

    this.externalWindow.addEventListener('beforeunload', () => {
      console.log('beforeunload')
      this.props.closeWindowPortal();
    });
  }

  componentWillUnmount() {
    this.externalWindow.close();
  }

  render() {
    return createPortal(this.props.children, this.containerEl);
  }
}
