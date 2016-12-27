import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";
import store from "./store";
import merge from "lodash.merge";
import "../src/less/jPlayer.less";

import {jPlayerDefaultOptions, statusDefaultValues} from "./containers/jPlayer";

const mapStateToProps = (state, ownProps) => ({jPlayer: state.jPlayer, jPlaylist: state.jPlaylist});

export default (WrappedComponent, jPlayerOptions) => {
    const initialState = {
        jPlayer: merge({}, statusDefaultValues, jPlayerDefaultOptions, jPlayerOptions)
    };
    WrappedComponent = connect(mapStateToProps)(WrappedComponent);
    ReactDOM.render(
    <Provider store={store(initialState)}>
        <WrappedComponent />
    </Provider>,
    document.getElementById(jPlayerOptions.jPlayerSelector));
}