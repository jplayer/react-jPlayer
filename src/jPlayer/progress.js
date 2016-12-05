import React from "react";
import PlayBar from "./playbar";

const Progress = (props) => (
    <div className="jp-progress">
        <div className={props.seekBarClass.join(" ")} style={this.state.seekBarStyle} onClick={this.onSeekBarClick}>                         
            <PlayBar smoothPlayBar={props.smoothPlayBar} currentPercentAbsolute={props.currentPercentAbsolute} playBarStyle={this.state.playBarStyle} />
            <div className={jPlayer.className.currentTime}>{this.state.currentTimeText}</div>
            <div className={jPlayer.className.duration} onClick={this.state.durationOnClick}>{this.state.durationText}</div>
        </div>
    </div>
);