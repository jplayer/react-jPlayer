import React from "react";
import ReactDOM from "react-dom";

import {Provider, connect} from "react-redux";
import store from "./store";

export default (WrappedPlayer, options) => {
    debugger
    let JPlayerWrapper = class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                jPlayerOptions: options
            }
        }
        updateOptions = (update, callback) => this.setState((prevState) => prevState.jPlayerOptions = update(prevState.jPlayerOptions), callback)
        render() {
            return <WrappedPlayer {...this.state.jPlayerOptions} updateOptions={this.updateOptions} />
        }
    }

    JPlayerWrapper = connect()(JPlayerWrapper);

    ReactDOM.render(<Provider store={store}><JPlayerWrapper/></Provider>, document.getElementById("jPlayer"));
}