import React from "react";

const Controls = (AdditionalControls) => (props) => (
    <div className="jp-controls">
        <a className={jPlayer.className.play} onClick={this.onPlayClick}>
            {props.html.play}
        </a>
        <a className={jPlayer.className.mute} onClick={this.onMuteClick}>
            {props.html.mute}
        </a>
        <a className={jPlayer.className.volumeMax} onClick={this.onVolumeMaxClick}>
            {props.html.volumeMax}
        </a>
        <a className={props.repeatClass.join(" ")} onClick={this.onRepeatClick}>							
            {props.html.repeat}			
        </a>																
        <a className={props.fullScreenClass.join(" ")} onClick={this.onFullScreenClick}>
            {props.html.fullScreen}
        </a>		
        <div className={props.volumeBarClass.join(" ")} style={this.state.volumeBarStyle} onClick={this.onVolumeBarClick}>
            <div className={props.volumeBarValueClass.join(" ")} style={this.state.volumeBarValueStyle} />
        </div>
        <div className={jPlayer.className.title}>
            {this.state.titleText}
        </div>
        <div className={props.playbackRateBarClass.join(" ")} style={this.state.playbackRateBarStyle} onClick={this.onPlaybackRateBarClick}>
            <div className={props.playbackRateBarValueClass.join(" ")} style={this.state.playbackRateBarValueStyle} />
        </div>		
        <AdditionalControls {...props.additionalControlProps} />
    </div>
);