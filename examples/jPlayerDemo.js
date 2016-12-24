import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";

import "../src/less/jPlayerBlueCompactSkin.less";
import "../src/less/jPlayerIconControls.less";

import * as constants from "../src/util/constants";
import renderjPlayer from "../src/index";
import JPlayer from "../src/containers/jPlayer";
import Media from "../src/containers/media";
import Gui from "../src/components/gui";
import Controls from "../src/components/controls";
import Progress from "../src/components/progress";
import PlayBar from "../src/components/playBar";
import BrowserUnsupported from "../src/components/browserUnsupported";
import Poster from "../src/components/poster";
import Audio from "../src/components/audio";
import Video from "../src/components/video";
import Details from "../src/components/details";
import Title from "../src/components/title";
import FullScreen from "../src/components/controls/fullScreen";
import Mute from "../src/components/controls/mute";
import Play from "../src/components/controls/play";
import Repeat from "../src/components/controls/repeat";
import PlaybackRateBar from "../src/components/controls/playbackRateBar";
import PlaybackRateBarValue from "../src/components/controls/playbackRateBarValue";
import VolumeBar from "../src/components/controls/volumeBar";
import VolumeBarValue from "../src/components/controls/volumeBarValue";

class Player extends React.Component {
    constructor(props){
        super();

        this.state = {
            muteClassName: "fa fa-volume-up"
        };
    }
    onVolumeChange = () => {
        if (this.props.jPlayer.muted) {
            this.setState({muteClassName: "fa fa-volume-off"})
        }
        else if (this.props.jPlayer.volume < 0.5) {
            this.setState({muteClassName: "fa fa-volume-down"})
        }
        else {
            this.setState({muteClassName: "fa fa-volume-up"})
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
                        <Play>
                            <i className="fa fa-play"></i>
                        </Play>
                        <Mute>
                            <i className={this.state.muteClassName}></i>
                        </Mute>
                        <FullScreen>
                            <i className="fa fa-expand"></i>
                        </FullScreen>
                        <Repeat>
                            <i className="fa fa-repeat"></i>
                        </Repeat>
                        <VolumeBar>
                            <VolumeBarValue />
                        </VolumeBar>
                        <PlaybackRateBar>
                            <PlaybackRateBarValue />
                        </PlaybackRateBar>  
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