import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import merge from 'lodash.merge';

import './less/jPlayer.less';
import jPlayerReducer from './reducers/jPlayerReducer';
import WrappedPlayer from './wrappedPlayer';
import Gui from './components/gui';
import Progress from './components/progress';
import Audio from './components/audio';
import Video from './components/video';
import BrowserUnsupported from './components/browserUnsupported';
import JPlayer, { defaultValues, jPlayerDefaultOptions,
  statusDefaultValues } from './containers/jPlayer';
import Media from './containers/media';
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
import PlaybackRateBarValue from './containers/controls/values/playbackRateBar';
import VolumeBar from './containers/controls/volumeBar';
import VolumeBarValue from './containers/controls/values/volumeBarValue';
import Duration from './containers/duration';
import CurrentTime from './containers/currentTime';

export default (...players) => {
  const initialState = { jPlayers: {} };

  players.forEach((wrappedPlayer) => {
    initialState.jPlayers[wrappedPlayer.options.id] = {
      ...merge({}, defaultValues, statusDefaultValues,
              jPlayerDefaultOptions, wrappedPlayer.options),
    };
  });

  const store = createStore(combineReducers({ jPlayers: jPlayerReducer }), initialState);

  ReactDOM.render(
    <Provider store={store}>
      <div>
        {players.map(Player => (
          <WrappedPlayer key={Player.options.id} id={Player.options.id}>
            <Player />
          </WrappedPlayer>
          ),
        )}
      </div>
    </Provider>,
    document.getElementById('app'));
};

export { JPlayer, Media, Gui, KeyControl, Progress, SeekBar, PlayBar,
   Buffer, BrowserUnsupported, Poster, Audio, Video, Title, FullScreen,
    Mute, Play, Repeat, PlaybackRateBar, PlaybackRateBarValue,
    VolumeBar, VolumeBarValue, Duration, CurrentTime };
