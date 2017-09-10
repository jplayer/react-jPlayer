/* eslint-disable max-len */

import initializeOptions from './initializeOptions/initializeOptions';
import reducer from './reducer/reducer';
import * as actions from './actions/actions';
import * as constants from './util/constants';

// Containers
import Gui from './components/gui/guiContainer';
import Video from './components/video/videoContainer';
import Audio from './components/audio/audioContainer';
import JPlayer from './components/jPlayer/jPlayerContainer';
import PlayBar from './components/playBar/playBarContainer';
import BufferBar from './components/bufferBar/bufferBarContainer';
import Poster from './components/poster/posterContainer';
import Title from './components/title/titleContainer';
import FullScreen from './components/fullScreen/fullScreenContainer';
import Mute from './components/mute/muteContainer';
import Play from './components/play/playContainer';
import Repeat from './components/repeat/repeatContainer';
import SeekBar from './components/seekBar/seekBarContainer';
import PlaybackRateBar from './components/playbackRateBar/playbackRateBarContainer';
import PlaybackRateBarValue from './components/playbackRateBarValue/playbackRateBarValueContainer';
import VolumeBar from './components/volumeBar/volumeBarContainer';
import VolumeBarValue from './components/volumeBarValue/volumeBarValueContainer';
import Download from './components/download/downloadContainer';
import Duration from './components/duration/durationContainer';
import CurrentTime from './components/currentTime/currentTimeContainer';
import BrowserUnsupported from './components/browserUnsupported/browserUnsupportedContainer';

// Components
import GuiComponent from './components/gui/gui';
import VideoComponent from './components/video/video';
import AudioComponent from './components/audio/audio';
import JPlayerComponent from './components/jPlayer/jPlayer';
import PlayBarComponent from './components/playBar/playBar';
import BufferBarComponent from './components/bufferBar/bufferBar';
import PosterComponent from './components/poster/poster';
import TitleComponent from './components/title/title';
import FullScreenComponent from './components/fullScreen/fullScreen';
import MuteComponent from './components/mute/mute';
import PlayComponent from './components/play/play';
import RepeatComponent from './components/repeat/repeat';
import SeekBarComponent from './components/seekBar/seekBar';
import PlaybackRateBarComponent from './components/playbackRateBar/playbackRateBar';
import PlaybackRateBarValueComponent from './components/playbackRateBarValue/playbackRateBarValue';
import VolumeBarComponent from './components/volumeBar/volumeBar';
import VolumeBarValueComponent from './components/volumeBarValue/volumeBarValue';
import DownloadComponent from './components/download/download';
import DurationComponent from './components/duration/duration';
import CurrentTimeComponent from './components/currentTime/currentTime';
import BrowserUnsupportedComponent from './components/browserUnsupported/browserUnsupported';

export default JPlayer;

export {
  initializeOptions,
  constants,
  reducer,
  actions,
  Gui,
  SeekBar,
  PlayBar,
  BufferBar,
  Poster,
  Video,
  Audio,
  Title,
  FullScreen,
  Mute,
  Play,
  Repeat,
  PlaybackRateBar,
  PlaybackRateBarValue,
  VolumeBar,
  VolumeBarValue,
  Download,
  Duration,
  CurrentTime,
  BrowserUnsupported,
};

export {
  GuiComponent,
  VideoComponent,
  AudioComponent,
  JPlayerComponent,
  PlayBarComponent,
  BufferBarComponent,
  PosterComponent,
  TitleComponent,
  FullScreenComponent,
  MuteComponent,
  PlayComponent,
  RepeatComponent,
  SeekBarComponent,
  PlaybackRateBarComponent,
  PlaybackRateBarValueComponent,
  VolumeBarComponent,
  VolumeBarValueComponent,
  DownloadComponent,
  DurationComponent,
  CurrentTimeComponent,
  BrowserUnsupportedComponent,
};
