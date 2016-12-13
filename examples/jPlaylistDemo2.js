import React from "react";

import renderjPlayer from "../src/index";

class ExampleComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }
    render() {
        return this.props.children
    }
}

const jPlaylistOptions = {
    jPlayerSelector: "jplayer_footer_player2",
    cssSelectorAncestor: "jp_container_footer_player2",
    controls: {
        //Toggle between play and pause in css based on playing or not
        play: {
            className: constants.classNames.PLAY,
            clickHandler: props.onPlayClick,
            html: <i className="fa fa-play"></i>
        },
        mute: <i className="fa fa-volume-up"></i>,
        fullScreen: <i className="fa fa-expand"></i>,
        repeat: <div><i className="fa fa-repeat"></i><i className="fa fa-bars"></i></div>,
        shuffle: <i className="fa fa-random"></i>,
        previous: <i className="fa fa-step-backward"></i>,
        next: <i className="fa fa-step-forward"></i>,
        playlistOptions: <div><i className="fa fa-ellipsis-h"></i><i className="fa fa-comment"></i></div>,
        stop: <i className="fa fa-step-forward jp-test"></i>
    },
    smoothPlayBar: false,
    muted: true,
    enableRemoveControls: true,
    loopOnPrevious: true,
    keyEnabled: true,
    globalVolume: true,
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
    onError: (jPlayer) => console.error(jPlayer.error)
};

//renderjPlayer(jPlaylist(ExampleComponent), jPlaylistOptions);