/* eslint-disable max-len */

import getInitialStates from './initialState/getInitialStates';
import jPlayerReducer from './reducer/reducer';
import connect from './connect/connect';
import Gui from './components/gui/guiContainer';
import Video from './components/video/videoContainer';
import Audio from './components/audio/audioContainer';
import JPlayer from './components/jPlayer/jPlayerContainer';
import SeekBar from './components/seekBar/seekBarContainer';
import PlayBar from './components/playBar/playBarContainer';
import BufferBar from './components/bufferBar/bufferBarContainer';
import Poster from './components/poster/posterContainer';
import Title from './components/title/titleContainer';
import FullScreen from './components/fullScreen/fullScreenContainer';
import Mute from './components/mute/muteContainer';
import Play from './components/play/playContainer';
import Repeat from './components/repeat/repeatContainer';
import PlaybackRateBar from './components/playbackRateBar/playbackRateBarContainer';
import PlaybackRateBarValue from './components/playbackRateBarValue/playbackRateBarValueContainer';
import VolumeBar from './components/volumeBar/volumeBarContainer';
import VolumeBarValue from './components/volumeBarValue/volumeBarValueContainer';
import Download from './components/download/downloadContainer';
import Duration from './components/duration/durationContainer';
import CurrentTime from './components/currentTime/currentTimeContainer';
import BrowserUnsupported from './components/browserUnsupported/browserUnsupportedContainer';
import { classes } from './util/constants';

const reducer = {
  jPlayers: jPlayerReducer,
};

export { classes, getInitialStates, reducer, connect, JPlayer, Gui, SeekBar, PlayBar,
  BufferBar, Poster, Video, Audio, Title, FullScreen,
  Mute, Play, Repeat, PlaybackRateBar, PlaybackRateBarValue,
  VolumeBar, VolumeBarValue, Download, Duration, CurrentTime, BrowserUnsupported };