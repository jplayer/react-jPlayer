import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";

import "../less/jPlayerBlueCompactSkin.less";
import "../less/jPlayerIconControls.less";

import * as constants from "../util/constants";
import renderjPlayer from "../index";
import JPlayer from "../containers/jPlayer";
import Media from "../containers/media";
import Gui from "../components/gui";
import Controls from "../components/controls";
import Progress from "../components/progress";
import PlayBar from "../components/playBar";
import BrowserUnsupported from "../components/browserUnsupported";
import Poster from "../components/poster";
import Audio from "../components/audio";
import Video from "../components/video";
import Details from "../components/details";
import Title from "../components/title";
import FullScreen from "../components/controls/fullScreen";
import Mute from "../components/controls/mute";
import Play from "../components/controls/play";
import Repeat from "../components/controls/repeat";
import PlaybackRateBar from "../components/controls/playbackRateBar";
import PlaybackRateBarValue from "../components/controls/playbackRateBarValue";
import VolumeBar from "../components/controls/volumeBar";
import VolumeBarValue from "../components/controls/volumeBarValue";

class Player extends React.Component {
    constructor(props){
        super();
        
        this.state = {
            muteClassName: "fa fa-volume-up"
        };
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
                <Poster />
                <Media onVolumeChange={this.onVolumeChange}>
                    <Audio>
                        <track src="subtitles_en.vtt" kind="subtitles" srcLang="en" label="English" />
                    </Audio>
                    <Video>
                        {/*<NativeVideoControls />*/}
                    </Video>
                </Media>
                <Gui>
                    <Controls>
                        <Play><i className="fa fa-play"></i></Play>
                        <Mute><i className={this.state.muteClassName}></i></Mute>
                        <FullScreen><i className="fa fa-expand"></i></FullScreen>
                        <Repeat><i className="fa fa-repeat"></i></Repeat>
                        <VolumeBar><VolumeBarValue /></VolumeBar>
                        <PlaybackRateBar><PlaybackRateBarValue /></PlaybackRateBar>  
                    </Controls>
                    <Progress>
                        <PlayBar />
                    </Progress>
                </Gui>
                <Details>
                    <Title>{this.props.jPlayer.media.title}</Title>
                </Details>
                <BrowserUnsupported>
                    <span>Update Required</span>
                    To play the media you will need to update your browser to a recent version.
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
    media: {
        title: "Cro Magnon Man",
        artist: "The Stark Palace",
        mp3: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
        poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
        free: true
    }
};

renderjPlayer(Player, jPlayerOptions);