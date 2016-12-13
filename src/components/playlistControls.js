import React from "react"
import {classNames} from "../util/constants";

const PlaylistControls = props => (
    <div className={props.controlsClassName}>
        <a className={classNames.playlist.SHUFFLE} onClick={props._onShuffleClick}>{props.html.shuffle}</a>
        <a className={classNames.playlist.PREVIOUS} onClick={props._onPreviousClick}>{props.html.previous}</a>
        <a className={classNames.playlist.NEXT} onClick={props._onNextClick}>{props.html.next}</a>
        <a className={classNames.playlist.EXTRA_CONTROLS}>{props.html.playlistOptions}</a>
    </div>
);

export default PlaylistControls;