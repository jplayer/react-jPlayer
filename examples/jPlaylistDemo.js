import React from "react";
import ReactDOM from "react-dom";

import renderjPlayer from "../src/index";
import JPlayer from "../src/containers/jPlayer";
import * as constants from "../src/util/constants";

class ExampleComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <div>{this.props.children}</div>
    }
}

class MyPlaylist extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            mute: "fa fa-volume-up"
        };

        this.jPlayerOptions = {
            jPlayerSelector: "jplayer_footer_player",
            cssSelectorAncestor: "jp_container_footer_player",
            controls: {
                //Toggle between play and pause in css based on playing or not
                play: <i className="fa fa-play"></i>,
                mute: <i className={this.state.mute}></i>,
                fullScreen: <i className="fa fa-expand"></i>,
                repeat: <div><i className="fa fa-repeat"></i><i className="fa fa-bars"></i></div>
            },
            smoothPlayBar: false,
            muted: true,
            keyEnabled: true,
            globalVolume: false,
            onVolumeChange: (volume) => {
                debugger;
                if (volume < 50) {
                    this.setState({mute: "fa fa-volume-down"})
                }
            },
            onError: (jPlayer) => console.error(jPlayer.error)
        };
        
        this.jPlaylistOptions = {
            controls: {
                shuffle: <i className="fa fa-random"></i>,
                previous: <i className="fa fa-step-backward"></i>,
                next: <i className="fa fa-step-forward"></i>,
                playlistOptions: <div><i className="fa fa-ellipsis-h"></i><i className="fa fa-comment"></i></div>
            },
            playlist: [
                {
                    title:"Cro Magnon Man",
                    artist:"The Stark Palace",
                    mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
                    poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
                    free: true
                },
                {
                    title:"Tempered Song",
                    artist:"Miaow",
                    mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                    oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
                    poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png",
                    free: true
                },
                {
                    title:"Das Song",
                    artist:"Miaow",
                    mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                    oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
                    poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
                },
                {
                    title:"Song",
                    artist:"Miaow",
                    mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                    oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
                    poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png",
                    free: true
                }
            ],
            loopOnPrevious: true,
            enableRemoveControls: true
        };
    }
    render() {
        return (
            <JPlayer />
        );
    }
}

ReactDOM.render(<MyPlaylist />, document.getElementById("jplayer_footer_player"));
//renderjPlayer(MyPlaylist, jPlayerOptions, jPlaylistOptions);