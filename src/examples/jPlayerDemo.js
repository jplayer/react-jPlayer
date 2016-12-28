import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";

import "../less/default/jPlayer.less";
import "../less/jPlayerIconControls.less";

import * as constants from "../util/constants";
import renderjPlayer from "../index";
import JPlayer from "../containers/jPlayer";
import Media from "../components/media";
import Gui from "../components/gui";
import Controls from "../components/controls";
import Progress from "../components/progress";
import PlayBar from "../components/playBar";
import Buffer from "../components/buffer";
import BrowserUnsupported from "../components/browserUnsupported";
import Poster from "../components/poster";
import Audio from "../components/audio";
import Video from "../components/video";
import Title from "../components/title";
import FullScreen from "../components/controls/fullScreen";
import Mute from "../components/controls/mute";
import Play from "../components/controls/play";
import Repeat from "../components/controls/repeat";
import PlaybackRateBar from "../components/controls/playbackRateBar";
import PlaybackRateBarValue from "../components/controls/playbackRateBarValue";
import VolumeBar from "../components/controls/volumeBar";
import VolumeBarValue from "../components/controls/volumeBarValue";
import {classNames} from "../util/constants";

class Player extends React.Component {
    constructor(props){
        super();
        
        this.state = {
            muteClassName: "fa fa-volume-up"
        };
    }
    static get defaultProps() {
        return {
            jPlayer: {
                media: {}
            }
        }
    }
    onVolumeChange = () => {
        if (this.props.jPlayer.muted) {
            this.setState({muteClassName: "fa fa-volume-off"});
        }
        else if (this.props.jPlayer.volume < 0.5) {
            this.setState({muteClassName: "fa fa-volume-down"});
        }
        else {
            this.setState({muteClassName: "fa fa-volume-up"});
        }
    }
    render() {
        return (
            <JPlayer>
                <Gui>
                    <Media onVolumeChange={this.onVolumeChange}>
                        <Audio>
                            <track src="subtitles_en.vtt" kind="subtitles" srcLang="en" label="English" />
                        </Audio>
                        <Video>
                            {/*<NativeVideoControls />*/}
                        </Video>
                    </Media>
                    <div className="jp-poster-container">
                        <Poster />
                        <Title>{this.props.jPlayer.media.title}</Title>
                    </div>
                    <Controls>
                        <Play><i className="fa fa-play"></i></Play>
                        <div className="jp-volume-controls">
                            <Mute><i className={this.state.muteClassName}></i></Mute>
                            <VolumeBar><VolumeBarValue /></VolumeBar>
                        </div>
                        <FullScreen><i className="fa fa-expand"></i></FullScreen>
                        <Repeat><i className="fa fa-repeat"></i></Repeat>
                        <PlaybackRateBar><PlaybackRateBarValue /></PlaybackRateBar>
                        <Progress>
                            <PlayBar />
                            <Buffer />
                            <div className={classNames.CURRENT_TIME}>{this.props.jPlayer.currentTimeText}</div>
                            <div className={classNames.DURATION} onClick={this.props.onDurationClick}>{this.props.jPlayer.durationText}</div>      
                        </Progress>
                    </Controls>
                </Gui>             
                <BrowserUnsupported>
                    <h2>Browser Unsupported</h2>
                    To play the media you will need to update your browser to a more recent version.
                </BrowserUnsupported>          
            </JPlayer>
        );
    }
}

const jPlayerOptions = {
    jPlayerSelector: "jplayer-footer-player",
    cssSelectorAncestor: "jp-container-footer-player",
    smoothPlayBar: false,
    muted: true,
    keyEnabled: true,
    globalVolume: false,
    autoplay: false,
    logErrors: true,
    media: {
        title: "Cro Magnon Man",
        artist: "The Stark Palace",
        mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
        poster: "http://wallpapercave.com/wp/Mb4UPsY.png",
        free: true
    }
};

renderjPlayer(Player, jPlayerOptions);