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

const jPlayerOptions = {
    jPlayerSelector: "jplayer_footer_player2",
    cssSelectorAncestor: "jp_container_footer_player2",
    controls: {
        //Toggle between play and pause in css based on playing or not
        play: <i className="fa fa-play"></i>,
        mute: <i className="fa fa-volume-up"></i>,
        fullScreen: <i className="fa fa-expand"></i>,
        repeat: <div><i className="fa fa-repeat"></i><i className="fa fa-bars"></i></div>
        
    },
    smoothPlayBar: false,
    muted: true,
    keyEnabled: true,
    globalVolume: false,
    onError: (jPlayer) => console.error(jPlayer.error)
}
// <i className="fa fa-ellipsis-h"></i>
// <i className="fa fa-comment"></i>
// <i key="shuffle" className="fa fa-random"></i>
// <i key="previous" className="fa fa-step-backward"></i>
// <i key="next" className="fa fa-step-forward"></i>
// <div key="repeat">
//     <i className="fa fa-repeat"></i>
//     <i className="fa fa-bars"></i>
// </div>
const jPlaylistDefaultOptions = {
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

//renderjPlayer(jPlaylist(ExampleComponent), jPlaylistOptions);