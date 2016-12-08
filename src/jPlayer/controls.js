import React from "react";
import * as util from "../util/index";
import * as constants from "../util/constants";

export default class extends React.Component {
	constructor(props) {
		super(props);

        this.setKeyBindings();
	}
    static get propTypes() {
        return {
            keyBindings: React.PropTypes.shape({
                play: React.PropTypes.shape({
                    key: React.PropTypes.number, 
                    fn: React.PropTypes.func
                }),
                fullScreen: React.PropTypes.shape({
                    key: React.PropTypes.number, 
                    fn: React.PropTypes.func
                }),
                muted: React.PropTypes.shape({
                    key: React.PropTypes.number, 
                    fn: React.PropTypes.func
                }),
                volumeUp: React.PropTypes.shape({
                    key: React.PropTypes.number, 
                    fn: React.PropTypes.func
                }),
                volumeDown: React.PropTypes.shape({
                    key: React.PropTypes.number,
                    fn: React.PropTypes.func
                }),
                loop: React.PropTypes.shape({
                    key: React.PropTypes.number, 
                    fn: React.PropTypes.func
                })
            })
        }
    }
    setKeyBindings = () => {
        // The key control object, defining the key codes and the functions to execute.
        this.keyBindings = merge({
            // The parameter, f = this.focusInstance, will be checked truethy before attempting to call any of these functions.
            // Properties may be added to this object, in key/fn pairs, to enable other key controls. EG, for the playlist add-on.
            play: {
                key: 80, // p
                fn: () => this.props.paused ? this.props.play() : this.props.pause()
            },
            fullScreen: {
                key: 70, // f
                fn: () => {
                    if(this.props.video || this.props.audioFullScreen) {
                        this.props.fullScreen(!this.props.fullScreen);
                    }
                }
            },
            muted: {
                key: 77, // m
                fn: () => this.props.mute(!this.props.muted)
            },
            volumeUp: {
                key: 190, // .
                fn: () =>  this.props.volume(this.props.volume + 0.1)
            },
            volumeDown: {
                key: 188, // ,
                fn: () => this.props.volume(this.props.volume - 0.1)
            },
            loop: {
                key: 76, // l
                fn: () => this.props.loop(this.props.loop())
            }
        }, this.props.keyBindings);
    }
    onMuteClick = () => this.props.mute(!this.props.muted)
    onPlayClick = () => this.props.paused ? this.props.play() : this.props.pause()
    onSeekBarClick = (e) => {	
        // Using $(e.currentTarget) to enable multiple seek bars
        var bar = e.currentTarget,
            offset = util.getOffset(bar),
            x = e.pageX - offset.left,
            w = util.getWidth(bar),
            p = 100 * x / w;

        this.props.setPlayHead(p);
    }
    onPlaybackRateBarClick = (e) => {
        // Using e.currentTarget to enable multiple playbackRate bars
        var bar = e.currentTarget,
            offset = util.getOffset(bar),
            x = e.pageX - offset.left,
            w = util.getWidth(bar),
            y = util.getHeight(bar) - e.pageY + offset.top,
            h = util.getHeight(bar),
            ratio,
            pbr;

        if(this.props.verticalPlaybackRate) {
            ratio = y/h;
        } else {
            ratio = x/w;
        }

        pbr = ratio * (this.props.maxPlaybackRate - this.props.minPlaybackRate) + this.props.minPlaybackRate;
        this.props.setPlaybackRate(pbr);
    }
    onVolumeBarClick = (e) => {
        // Using $(e.currentTarget) to enable multiple volume bars
        var bar = e.currentTarget,
            offset = util.getOffset(bar),
            x = e.pageX - offset.left,
            w = util.getWidth(bar),
            y = util.getHeight(bar) - e.pageY + offset.top,
            h = util.getHeight(bar);

        this.props.verticalVolume ? this.props.setVolume(y/h) : this.props.setVolume(x/w)

        if(this.props.muted) {
            this.props.setMute(false);
        }
    }
    onVolumeMaxClick = () => {
        this.props.setVolume(1);

        if(this.props.muted) {
            this.props.setMute(false);
        }
    } 
    onVideoPlayClick = () => this.props.play()
    onRepeatClick = () => this.props.incrementLoop()
    onFullScreenClick = () => this.props.setFullScreen(!this.props.fullScreen)
    onKeyDown = (e) => {
        for (var key in this.keyBindings) {
            const keyBinding = this.keyBindings[key];
            
            if (keyBinding.key === e.charCode) {
                keyBinding.fn();
            }
        }
    }
    render() {
        return (
            <div className="jp-controls" onKeyDown={this.onKeyDown}>
                <a className={constants.classNames.PLAY} onClick={this.onPlayClick}>
                    {this.props.html.play}
                </a>
                <a className={constants.classNames.MUTE} onClick={this.onMuteClick}>
                    {this.props.html.mute}
                </a>
                <a className={constants.classNames.VOLUME_MAX} onClick={this.onVolumeMaxClick}>
                    {this.props.html.volumeMax}
                </a>
                <a className={this.props.repeatClass.join(" ")} onClick={this.onRepeatClick}>							
                    {this.props.html.repeat}			
                </a>																
                <a className={this.props.fullScreenClass.join(" ")} onClick={this.onFullScreenClick}>
                    {this.props.html.fullScreen}
                </a>		
                <div className={this.props.volumeBarClass.join(" ")} style={this.state.volumeBarStyle} onClick={this.onVolumeBarClick}>
                    <div className={this.props.volumeBarValueClass.join(" ")} style={this.state.volumeBarValueStyle} />
                </div>
                <div className={constants.classNames.TITLE}>
                    {this.state.titleText}
                </div>
                <div className={this.props.playbackRateBarClass.join(" ")} style={this.state.playbackRateBarStyle} onClick={this.onPlaybackRateBarClick}>
                    <div className={this.props.playbackRateBarValueClass.join(" ")} style={this.state.playbackRateBarValueStyle} />
                </div>		
                {this.props.children}
            </div>
        );
    }
}