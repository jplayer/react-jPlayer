import React from "react";
import {classNames} from "../util/constants";

const Controls = props => (
    <div className={props.className} onKeyDown={props.onKeyDown}>
        {Object.keys(props.controls).map(key => getControls(props)[key] || props.controls[key])}
    </div>
);

const getControls = (props) => ({
    play: <a className={classNames.PLAY} onClick={props.onPlayClick}>{props.controls.play}</a>,
	mute: <a className={classNames.MUTE} onClick={props.onMuteClick}>{props.controls.mute}</a>,
	volumeMax: <a className={classNames.VOLUME_MAX} onClick={props.onVolumeMaxClick}>{props.controls.volumeMax}</a>,
	repeat: <a className={classNames.REPEAT} onClick={props.onRepeatClick}>{props.controls.repeat}</a>,
	fullScreen: <a className={classNames.FULL_SCREEN} onClick={props.onFullScreenClick}>{props.controls.fullScreen}</a>,
	shuffle: <a className={classNames.SHUFFLE} onClick={props.onShuffleClick}>{props.controls.shuffle}</a>,
	previous: <a className={classNames.PREVIOUS} onClick={props.onPreviousClick}>{props.controls.previous}</a>,
	next: <a className={classNames.NEXT} onClick={props.onNextClick}>{props.controls.next}</a>,
    volumeBar: <div className={props.volumeBarClass} onClick={props.onVolumeBarClick}><div style={props.volumeBarValueStyle} /></div>,
	playbackRateBar: <div className={props.playbackRateBarClass} onClick={props.onPlaybackRateBarClick}><div style={props.playbackRateBarValueStyle} /></div>
});

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
    volumeBarClass: React.PropTypes.array,
    volumeBarValueStyle: React.PropTypes.object,
    playbackRateBarClass: React.PropTypes.array,
    playbackRateBarValueStyle: React.PropTypes.object,
}

export default Controls;