import "../../../src/less/default/jPlayer.less";
import render from "../../../src/index";
import AudioPlayer, {options as audioPlayerOptions} from "./audioPlayer";
import AudioPlayerTwo, {options as audioPlayerTwoOptions} from "./audioPlayer";

render("audio-player", AudioPlayer, audioPlayerOptions);
render("audio-player-two", AudioPlayerTwo, audioPlayerTwoOptions);