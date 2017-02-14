import './jPlayer/jPlayer/jPlayer.less';
import JPlayerProvider from './jPlayerProvider';
import Gui from './jPlayer/gui/gui.container';
import Video from './jPlayer/video/video.container';
import Audio from './jPlayer/audio/audio.container';
import JPlayer from './jPlayer/jPlayer/jPlayer.container';
import KeyControl from './jPlayer/keyControl/keyControl.container';
import SeekBar from './jPlayer/seekBar/seekBar.container';
import PlayBar from './jPlayer/playBar/playBar.container';
import BufferBar from './jPlayer/bufferBar/bufferBar.container';
import Poster from './jPlayer/poster/poster.container';
import Title from './jPlayer/title/title.container';
import FullScreen from './jPlayer/fullScreen/fullScreen.container';
import Mute from './jPlayer/mute/mute.container';
import Play from './jPlayer/play/play.container';
import Repeat from './jPlayer/repeat/repeat.container';
import PlaybackRateBar from './jPlayer/playbackRateBar/playbackRateBar.container';
import PlaybackRateBarValue from './jPlayer/playbackRateBarValue/playbackRateBarValue.container';
import VolumeBar from './jPlayer/volumeBar/volumeBar.container';
import VolumeBarValue from './jPlayer/volumeBarValue/volumeBarValue.container';
import Download from './jPlayer/download/download.container';
import Duration from './jPlayer/duration/duration.container';
import CurrentTime from './jPlayer/currentTime/currentTime.container';
import BrowserUnsupported from './jPlayer/browserUnsupported/browserUnsupported.container';

export { JPlayerProvider, JPlayer, Gui, KeyControl, SeekBar, PlayBar,
   BufferBar, Poster, Video, Audio, Title, FullScreen,
    Mute, Play, Repeat, PlaybackRateBar, PlaybackRateBarValue,
    VolumeBar, VolumeBarValue, Download, Duration, CurrentTime, BrowserUnsupported };
