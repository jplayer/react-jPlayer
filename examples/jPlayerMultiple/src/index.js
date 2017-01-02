import "../../../src/less/default/jPlayer.less";
import createJPlayer from "../../../src/index";
import AudioPlayer from "./audioPlayer";
import AudioPlayerTwo from "./audioPlayerTwo";

createJPlayer([AudioPlayer, AudioPlayerTwo]);