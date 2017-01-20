import '../../src/less/default/jPlayer.less';
import '../assets/examples.less';
import createJPlayer from '../../src/index';
import AudioPlayer from './audioPlayer';
import VideoPlayer from './videoPlayer';
import MixedPlayer from './mixedPlayer';

createJPlayer(AudioPlayer, VideoPlayer, MixedPlayer);
