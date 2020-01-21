import React, {PureComponent, Fragment} from 'react';
import Button from "@material-ui/core/Button";
import WindowPortalBody from "./WindowPortalBody";

export default class WindowPortal extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showWindowPortal: false,
    };
  }

  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      this.closeWindowPortal();
    });
  }

  toggleWindowPortal = () => {
    this.setState(state => ({
      ...state,
      showWindowPortal: !state.showWindowPortal,
    }));
  };

  closeWindowPortal = () => {
    this.setState({ showWindowPortal: false })
  };

  render() {
    return (
      <Fragment>
        <Button onClick={this.toggleWindowPortal} color="inherit">Login with google</Button>
        {
          this.state.showWindowPortal && (
            <WindowPortalBody closeWindowPortal={this.closeWindowPortal} >
              <h1>Counter in a portal</h1>
              <p>Even though I render in a different window, I share state!</p>

              <button onClick={() => this.closeWindowPortal()} >
                Close me!
              </button>
            </WindowPortalBody>
          )
        }
      </Fragment>
    )
  }
}
