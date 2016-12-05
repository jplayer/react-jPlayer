import React from "react";

export default (AdditionalControls) => class extends React.Component {
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
                fn: () => this.props.updateOption("paused", !this.props.paused)
            },
            fullScreen: {
                key: 70, // f
                fn: () => {
                    if(this.props.video || this.props.audioFullScreen) {
                        this.props.updateOption("fullScreen", !this.props.fullScreen)
                    }
                }
            },
            muted: {
                key: 77, // m
                fn: () => this.props.updateOption("muted", !this.props.muted)
            },
            volumeUp: {
                key: 190, // .
                fn: () =>  this.props.updateOption("volume", this.props.volume + 0.1)
            },
            volumeDown: {
                key: 188, // ,
                fn: () => this.props.updateOption("volume", this.props.volume - 0.1)
            },
            loop: {
                key: 76, // l
                fn: () => this.props.updateOption("loop", this.incrementCurrentLoop())
            }
        }, this.props.keyBindings);
    }
    onMuteClick = () => this.props.updateOption("muted", !this.props.muted)
    onPlayClick = () => this.props.updateOption("paused", !this.props.paused)
    onSeekBarClick = (e) => {	
        // Using $(e.currentTarget) to enable multiple seek bars
        var bar = e.currentTarget,
            offset = util.getOffset(bar),
            x = e.pageX - offset.left,
            w = util.getWidth(bar),
            p = 100 * x / w;

        this.props.playHead(p);
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
        this.props.updateOption("playbackRate", pbr);
    }
    onVolumeBarClick = (e) => {
        // Using $(e.currentTarget) to enable multiple volume bars
        var bar = e.currentTarget,
            offset = util.getOffset(bar),
            x = e.pageX - offset.left,
            w = util.getWidth(bar),
            y = util.getHeight(bar) - e.pageY + offset.top,
            h = util.getHeight(bar);

        if(this.props.verticalVolume) {
            this.props.updateOption("volume", y/h);
        } else {
            this.props.updateOption("volume", x/w);
        }

        if(this.props.muted) {
            this.props.updateOption("muted", false);
        }
    }
    onVolumeMaxClick = () => {
        this.props.updateOption("volume", 1);

        if(this.props.muted) {
            this.props.updateOption("muted", false);
        }
    } 
    onVideoPlayClick = () => this.props.updateOption("paused", false)	
    onRepeatClick = () => this.props.updateOption("loop", this.props.loop)
    onFullScreenClick = () => this.props.updateOption("fullScreen", !this.props.fullScreen)
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
    }
}