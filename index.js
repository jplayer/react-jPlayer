/* eslint-disable max-len */

import getInitialStates from './src/initialState/getInitialStates';
import jPlayerReducer from './src/reducer/reducer';
import connect from './src/connect/connect';
import Gui from './src/components/gui/guiContainer';
import Video from './src/components/video/videoContainer';
import Audio from './src/components/audio/audioContainer';
import JPlayer from './src/components/jPlayer/jPlayerContainer';
import SeekBar from './src/components/seekBar/seekBarContainer';
import PlayBar from './src/components/playBar/playBarContainer';
import BufferBar from './src/components/bufferBar/bufferBarContainer';
import Poster from './src/components/poster/posterContainer';
import Title from './src/components/title/titleContainer';
import FullScreen from './src/components/fullScreen/fullScreenContainer';
import Mute from './src/components/mute/muteContainer';
import Play from './src/components/play/playContainer';
import Repeat from './src/components/repeat/repeatContainer';
import PlaybackRateBar from './src/components/playbackRateBar/playbackRateBarContainer';
import PlaybackRateBarValue from './src/components/playbackRateBarValue/playbackRateBarValueContainer';
import VolumeBar from './src/components/volumeBar/volumeBarContainer';
import VolumeBarValue from './src/components/volumeBarValue/volumeBarValueContainer';
import Download from './src/components/download/downloadContainer';
import Duration from './src/components/duration/durationContainer';
import CurrentTime from './src/components/currentTime/currentTimeContainer';
import BrowserUnsupported from './src/components/browserUnsupported/browserUnsupportedContainer';
import { classes } from './src/util/constants';

const reducer = {
  jPlayers: jPlayerReducer,
};

export { classes, getInitialStates, reducer, connect, JPlayer, Gui, SeekBar, PlayBar,
  BufferBar, Poster, Video, Audio, Title, FullScreen,
  Mute, Play, Repeat, PlaybackRateBar, PlaybackRateBarValue,
  VolumeBar, VolumeBarValue, Download, Duration, CurrentTime, BrowserUnsupported };
