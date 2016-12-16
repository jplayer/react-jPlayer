import React from "react";
import ReactDOM from "react-dom";
import merge from "lodash.merge";
import {Provider, connect} from "react-redux";
import store from "./store";
import jPlayer, {jPlayerDefaultValues} from "./containers/jPlayer";
import jPlaylist, {jPlaylistDefaultValues} from "./containers/jPlaylist";
import playerGui from "./containers/playerGui";

export default (WrappedComponent, jPlayerOptions, jPlaylistOptions) => {
    const usingPlaylist = jPlaylistOptions !== undefined;
    const initialState = {
        jPlayer: merge(jPlayerDefaultValues, jPlayerOptions),
        jPlaylist: merge(jPlaylistDefaultValues, jPlaylistOptions)
    };

    const Player = usingPlaylist ? jPlayer(jPlaylist(playerGui(WrappedComponent))) : jPlayer(playerGui(WrappedComponent));

    ReactDOM.render(<Provider store={store(initialState)}><Player /></Provider>, document.getElementById(jPlayerOptions.jPlayerSelector));
}