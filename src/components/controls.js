import React from "react";
import {classNames} from "../util/constants";

const Controls = props => (
    <div className={props.className} onKeyDown={props.onKeyDown}>
        {Object.keys(props.controls).map(key => getControls(props)[key] || props.controls[key])}
        {Object.keys(props.playlistControls).map(key => getPlaylistControls(props)[key] || props.playlistControls[key])}
        
        <div className={props.volumeBarClass.join(" ")} onClick={props.onVolumeBarClick}>
            <div className={props.volumeBarValueClass.join(" ")} style={props.volumeBarValueStyle} />
        </div>
        <div className={props.playbackRateBarClass.join(" ")} onClick={props.onPlaybackRateBarClick}>
            <div className={props.playbackRateBarValueClass.join(" ")} style={props.playbackRateBarValueStyle}/>
        </div>
    </div>
);

const getControls = props => ({
    play: <a className={classNames.PLAY} onClick={props.onPlayClick}>{props.controls.play}</a>,
	mute: <a className={classNames.MUTE} onClick={props.onMuteClick}>{props.controls.mute}</a>,
	volumeMax: <a className={classNames.VOLUME_MAX} onClick={props.onVolumeMaxClick}>{props.controls.volumeMax}</a>,
	repeat: <a className={classNames.REPEAT} onClick={props.onRepeatClick}>{props.controls.repeat}</a>,
	fullScreen: <a className={classNames.FULL_SCREEN} onClick={props.onFullScreenClick}>{props.controls.fullScreen}</a>
});

const getPlaylistControls = props => ({
	shuffle: <a className={classNames.SHUFFLE} onClick={props.onShuffleClick}>{props.playlistControls.shuffle}</a>,
	previous: <a className={classNames.PREVIOUS} onClick={props.onPreviousClick}>{props.playlistControls.previous}</a>,
	next: <a className={classNames.NEXT} onClick={props.onNextClick}>{props.playlistControls.next}</a>
});

Controls.defaultProps = {
    playlistControls: {},
    playbackRateBarClass: [],
    playbackRateBarValueClass: [],
    volumeBarClass: [],
    volumeBarValueClass: []
}

Controls.propTypes = {
    onPlayClick: React.PropTypes.func,
    onMuteClick: React.PropTypes.func,
    onVolumeMaxClick: React.PropTypes.func,
    onRepeatClick: React.PropTypes.func,
    onFullScreenClick: React.PropTypes.func,
    onShuffleClick: React.PropTypes.func,
    onPreviousClick: React.PropTypes.func,
    onNextClick: React.PropTypes.func,
    onVolumeBarClick: React.PropTypes.func,
    onPlaybackRateBarClick: React.PropTypes.func,
    className: React.PropTypes.string,
    onKeyDown: React.PropTypes.func,
    controls: React.PropTypes.object.isRequired,
    playlistControls: React.PropTypes.object,
    volumeBarClass: React.PropTypes.arrayOf(React.PropTypes.string),
    volumeBarValueClass: React.PropTypes.arrayOf(React.PropTypes.string),
    volumeBarValueStyle: React.PropTypes.object,
    playbackRateBarClass: React.PropTypes.arrayOf(React.PropTypes.string),
    playbackRateBarValueClass: React.PropTypes.arrayOf(React.PropTypes.string),
    playbackRateBarValueStyle: React.PropTypes.object
}

export default Controls;