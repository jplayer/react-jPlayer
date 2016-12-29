import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";
import {bindActionCreators} from "redux";
import store from "./store";
import merge from "lodash.merge";

import "./less/jPlayer.less";
import * as jPlayerActions from "./actions/jPlayerActions";
import {defaultValues, jPlayerDefaultOptions, statusDefaultValues} from "./containers/jPlayer";

const mapStateToProps = (state, ownProps) => ({
    jPlayer: state.jPlayer, 
    jPlaylist: state.jPlaylist
});

const mapDispatchToProps = (dispatch) => bindActionCreators(jPlayerActions, dispatch);

export default (WrappedComponent, jPlayerOptions) => {
    WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);

    const initialState = {
        jPlayer: merge({}, defaultValues, statusDefaultValues, jPlayerDefaultOptions, jPlayerOptions)
    };
    
    ReactDOM.render(
    <Provider store={store(initialState)}>
        <WrappedComponent />
    </Provider>,
    document.getElementById(jPlayerOptions.jPlayerSelector));
}