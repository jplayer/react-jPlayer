import React from "react";
import ReactDOM from "react-dom";
import merge from "lodash.merge";
import {Provider, connect} from "react-redux";
import store from "./store";
import jPlayer from "./containers/jPlayer";
import jPlaylist from "./containers/jPlaylist";
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

const jPlayerDefaultValues = {
    cssSelectorAncestor: "jp_container_1",
    jPlayerSelector: "jplayer_1",
    preload: "metadata", // HTML5 Spec values: none, metadata, auto.	
    captureDuration: true, // When true, clicks on the duration are captured and no longer propagate up the DOM.	
    minPlaybackRate: 0.5,
    maxPlaybackRate: 4,
    controls: {},
    src: "",
    supplied: ["mp3"], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
    playbackRate: 1.0,
    defaultPlaybackRate: 1.0,		
    volume: 0.8, // The volume. Number 0 to 1.
    media: {},
    paused: true,
    format: {},
    formatType: "",
    waitForPlay: true, // Same as waitForLoad except in case where preloading.
    waitForLoad: true,
    srcSet: false,
    video: false, // True if playing a video
    seekPercent: 0,
    currentPercentRelative: 0,
    currentPercentAbsolute: 0,
    currentTime: 0,
    duration: 0,
    remaining: 0,
    videoWidth: 0, // Intrinsic width of the video in pixels.
    videoHeight: 0, // Intrinsic height of the video in pixels.
    readyState: 0,
    networkState: 0,
    playbackRateStatus: 1, // Warning - Now both an option and a status property
    ended: 0
}

const jPlaylistDefaultValues = {
    html: {},
    playlist: [],
    shuffleOnLoop: true,
    shuffled: false,
    itemClass: "jp-playlist-item",
    freeItemClass: "jp-playlist-item-free",
    removeItemClass: "jp-playlist-item-remove",
    freeGroupClass: "jp-free-media",
    current: 0
}