import './less/jPlayer.less';
import Gui from './containers/gui';
import Video from './containers/video';
import Audio from './containers/audio';
import Progress from './components/progress';
import BrowserUnsupported from './components/browserUnsupported';
import JPlayer from './containers/jPlayer';
import KeyControl from './containers/keyControl';
import SeekBar from './containers/seekBar';
import PlayBar from './containers/playBar';
import Buffer from './containers/buffer';
import Poster from './containers/poster';
import Title from './containers/title';
import FullScreen from './containers/controls/fullScreen';
import Mute from './containers/controls/mute';
import Play from './containers/controls/play';
import Repeat from './containers/controls/repeat';
import PlaybackRateBar from './containers/controls/playbackRateBar';
import PlaybackRateBarValue from './containers/controls/playbackRateBarValue';
import VolumeBar from './containers/controls/volumeBar';
import VolumeBarValue from './containers/controls/volumeBarValue';
import Download from './containers/controls/download';
import Duration from './containers/duration';
import CurrentTime from './containers/currentTime';

export { JPlayer, Gui, KeyControl, Progress, SeekBar, PlayBar,
   Buffer, BrowserUnsupported, Poster, Video, Audio, Title, FullScreen,
    Mute, Play, Repeat, PlaybackRateBar, PlaybackRateBarValue,
    VolumeBar, VolumeBarValue, Download, Duration, CurrentTime };
