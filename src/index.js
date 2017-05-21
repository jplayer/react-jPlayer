/* eslint-disable max-len */

import initialState from './initialState/initialState';
import reducer from './reducer/reducer';
import * as actions from './actions/actions';
import connect from './connect/connect';
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
import * as constants from './util/constants';

export default JPlayer;

export { constants, initialState, reducer, actions, connect, Gui, SeekBar, PlayBar,
  BufferBar, Poster, Video, Audio, Title, FullScreen,
  Mute, Play, Repeat, PlaybackRateBar, PlaybackRateBarValue,
  VolumeBar, VolumeBarValue, Download, Duration, CurrentTime, BrowserUnsupported };
