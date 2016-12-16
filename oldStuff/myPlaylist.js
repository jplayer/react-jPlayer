var myPlaylist = new jPlayerPlaylist({
  jPlayer: "#jquery_jplayer_1",
  cssSelectorAncestor: "#jp_container_1"
}, [
  {
    title:"Cro Magnon Man",
    artist:"The Stark Palace",
    mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
    oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
  },
  {
    title:"Cro Magnon Man",
    artist:"The Stark Palace",
    mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
    oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
  }
], 
{
  playlistOptions: {
    enableRemoveControls: true
  },
  swfPath: "/js",
  supplied: "mp3",
  smoothPlayBar: true,
  keyEnabled: true,
  audioFullScreen: true // Allows the audio poster to go full screen via keyboard
});