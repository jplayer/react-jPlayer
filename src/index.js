import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";
import store from "./store";
import media from "./containers/media";
import jPlayer from "./containers/jPlayer";
import jPlaylist from "./containers/jPlaylist";
import PlaylistControls from "./components/playlistControls";

export default (WrappedComponent, jPlayerOptions, jPlaylistOptions) => {
    const usingPlaylist = jPlaylistOptions !== undefined;
    const initialState = {
        jPlayer: jPlayerOptions,
        jPlaylist: jPlaylistOptions
    };
    const Media = usingPlaylist ? jPlayer(jPlaylist(WrappedComponent, PlaylistControls)) : jPlayer(WrappedComponent);

    ReactDOM.render(<Provider store={store(initialState)}><Media /></Provider>, document.getElementById(jPlayerOptions.jPlayerSelector));
}