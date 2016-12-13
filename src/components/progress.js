import React from "react";
import {classNames} from "../util/constants";
import {getOffset, getWidth} from "../util/index";

const Progress = (props) => (
    <div className={props.className}>
        <div className={classNames.SEEK_BAR} style={props.seekBarStyle} onClick={props.onSeekBarClick}>                         
            {props.children}
            <div className={classNames.CURRENT_TIME}>{props.currentTimeText}</div>
            <div className={classNames.DURATION} onClick={props.onDurationClick}>{props.durationText}</div>
        </div>
    </div>
);

Progress.propTypes = {
    onSeekBarClick: React.PropTypes.func,
    onDurationClick: React.PropTypes.func,
    seekBarStyle: React.PropTypes.object,
    currentTimeText: React.PropTypes.string,
    durationText: React.PropTypes.string
}

export default Progress;