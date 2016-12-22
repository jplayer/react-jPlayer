import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";

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

class Player extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            mute: "fa fa-volume-up"
        };
    }
    onVolumeChange = () => {
        if (this.props.volume < 50) {
            this.setState({mute: "fa fa-volume-down"})
        }
    }
    render() {
        return (
            <JPlayer>
                <Poster onClick={this.props.posterOnClick} />
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
                        <i key="play" className="fa fa-play"></i>
                        <i key="mute" className={this.state.mute}></i>
                        <i key="fullScreen" className="fa fa-expand"></i>
                        <div key="repeat">
                            <i className="fa fa-repeat"></i>
                            <i className="fa fa-bars"></i>
                        </div>
                        <i key="shuffle" className="fa fa-random"></i>
                        <i key="previous" className="fa fa-step-backward"></i>
                        <i key="next" className="fa fa-step-forward"></i>
                        <div>
                            <i className="fa fa-ellipsis-h"></i>
                            <i className="fa fa-comment"></i>
                        </div>
                    </Controls>
                    <Progress>
                        <PlayBar />
                    </Progress>
                </Gui>
                <BrowserUnsupported>
                    <span>Update Required</span>
                    To play the media you will need to update your browser to a recent version.
                </BrowserUnsupported>
            </JPlayer>
        );
    }
}

const jPlayerOptions = {
    jPlayerSelector: "jplayer_footer_player",
    cssSelectorAncestor: "jp_container_footer_player",
    smoothPlayBar: false,
    muted: false,
    keyEnabled: true,
    globalVolume: false,
    media: {
        title: "Cro Magnon Man",
        artist: "The Stark Palace",
        mp3: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
        poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
        free: true
    }
};
renderjPlayer(Player, jPlayerOptions);

// const jPlaylistDefaultOptions = {
//     playlist: [
//         {
//             title:"Cro Magnon Man",
//             artist:"The Stark Palace",
//             mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
//             poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
//             free: true
//         },
//         {
//             title:"Tempered Song",
//             artist:"Miaow",
//             mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
//             oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
//             poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png",
//             free: true
//         },
//         {
//             title:"Das Song",
//             artist:"Miaow",
//             mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
//             oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
//             poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
//         },
//         {
//             title:"Song",
//             artist:"Miaow",
//             mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
//             oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
//             poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png",
//             free: true
//         }
//     ],
//     loopOnPrevious: true,
//     enableRemoveControls: true
// };