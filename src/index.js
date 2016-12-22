import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";
import store from "./store";
import merge from "lodash.merge";

import {jPlayerDefaultOptions, statusDefaultValues} from "./containers/jPlayer";
import {updateOption} from "./actions/jPlayerActions";

// const mapStateToProps = (state, ownProps) => ({jPlayer: state.jPlayer, jPlaylist: state.jPlaylist});

// export default (WrappedComponent, jPlayerOptions, jPlaylistOptions) => {
//     debugger
//     const usingPlaylist = jPlaylistOptions !== undefined;
//     const initialState = {
//         jPlayer: merge(jPlayerDefaultValues, jPlayerOptions),
//         jPlaylist: merge(jPlaylistDefaultValues, jPlaylistOptions)
//     };

//     WrappedComponent = connect(mapStateToProps)(WrappedComponent);
//     const Player = usingPlaylist ? jPlayer(jPlaylist(playerGui(WrappedComponent))) : jPlayer(playerGui(WrappedComponent));

//     ReactDOM.render(<Provider store={store(initialState)}><Player /></Provider>, document.getElementById(jPlayerOptions.jPlayerSelector));
// }

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