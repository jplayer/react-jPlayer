import React from "react";
import {classNames} from "../util/constants";

const Control = props => {
    const key = React.Children.only(props.children).key;
    const wrappedControl = wrappedControls(props)[key];

    return wrappedControl || props.children;
}

const wrappedControls = props => ({
    play: (<a className={classNames.PLAY} onClick={props.onPlayClick}>{props.children}</a>),
    mute: (<a className={classNames.MUTE} onClick={props.onMuteClick}>{props.children}</a>),
    volumeMax: (<a className={classNames.VOLUME_MAX} onClick={props.onVolumeMaxClick}>{props.children}</a>),
    repeat: (<a className={classNames.REPEAT} onClick={props.onRepeatClick}>{props.children}</a>),
    fullScreen: (<a className={classNames.FULL_SCREEN} onClick={props.onFullScreenClick}>{props.children}</a>),
    shuffle: (<a className={classNames.SHUFFLE} onClick={props.onShuffleClick}>{props.children}</a>),
    previous: (<a className={classNames.PREVIOUS} onClick={props.onPreviousClick}>{props.children}</a>),
    next: (<a className={classNames.NEXT} onClick={props.onNextClick}>{props.children}</a>)
})

export default Control;