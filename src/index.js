import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";
import store from "./store";
import jPlayer from "./containers/jPlayer";
import jPlaylist from "./containers/jPlaylist";
import playerGui from "./containers/playerGui";

export default (WrappedComponent, jPlayerOptions, jPlaylistOptions) => {
    const usingPlaylist = jPlaylistOptions !== undefined;
    const initialState = {
        jPlayer: jPlayerOptions,
        jPlaylist: jPlaylistOptions
    };

    const Player = usingPlaylist ? jPlayer(jPlaylist(playerGui(WrappedComponent))) : jPlayer(playerGui(WrappedComponent));

    ReactDOM.render(<Provider store={store(initialState)}><Player /></Provider>, document.getElementById(jPlayerOptions.jPlayerSelector));
}