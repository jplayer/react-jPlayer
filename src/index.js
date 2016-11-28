import React from "react";
import ReactDOM from "react-dom";

import {Provider, connect} from "react-redux";
import store from "./store";

const mapStateToProps = (state, ownProps) => {
  return {
    muted: state.jPlayer.muted,
    paused: state.jPlayer.paused
  }
}

export default (WrappedPlayer, options) => {
    let JPlayerWrapper = class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                jPlayerOptions: options
            }
        }
        updateOptions = (update, callback) => this.setState((prevState) => prevState.jPlayerOptions = update(prevState.jPlayerOptions), callback)
        render() {
            debugger;
            return <WrappedPlayer {...this.props} {...this.state.jPlayerOptions} updateOptions={this.updateOptions} />
        }
    }

    JPlayerWrapper = connect(mapStateToProps)(JPlayerWrapper);

    ReactDOM.render(<Provider store={store}><JPlayerWrapper/></Provider>, document.getElementById(options.jPlayerSelector));
}