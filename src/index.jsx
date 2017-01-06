import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, bindActionCreators } from 'redux';
import merge from 'lodash.merge';

import './less/jPlayer.less';
import jPlayerReducer from './reducers/jPlayerReducer';
import * as jPlayerActions from './actions/jPlayerActions';
import { defaultValues, jPlayerDefaultOptions, statusDefaultValues } from './containers/jPlayer';
import JPlayer from './containers/jPlayer';
import Media from './components/media';
import Gui from './components/gui';
import KeyControl from './components/keyControl';
import Progress from './components/progress';
import SeekBar from './components/seekBar';
import PlayBar from './components/playBar';
import Buffer from './components/buffer';
import BrowserUnsupported from './components/browserUnsupported';
import Poster from './components/poster';
import Audio from './components/audio';
import Video from './components/video';
import Title from './components/title';
import FullScreen from './components/controls/fullScreen';
import Mute from './components/controls/mute';
import Play from './components/controls/play';
import Repeat from './components/controls/repeat';
import PlaybackRateBar from './components/controls/playbackRateBar';
import PlaybackRateBarValue from './components/controls/playbackRateBarValue';
import VolumeBar from './components/controls/volumeBar';
import VolumeBarValue from './components/controls/volumeBarValue';
import Duration from './components/duration';
import CurrentTime from './components/currentTime';

const mapStateToProps = ({ jPlayers }, { id }) => {
  const otherPlayers = {};

  Object.keys(jPlayers).forEach((key) => {
    if (key !== id) {
      otherPlayers[key] = jPlayers[key];
    }
  });

  if (Object.keys(otherPlayers).length) {
    return {
      ...jPlayers[id],
      jPlayers: otherPlayers,
    };
  }

  return {
    ...jPlayers[id],
  };
};

const mapDispatchToProps = dispatch => (
  {
    functions: bindActionCreators(jPlayerActions, dispatch),
  }
);

class WrappedPlayer extends React.Component {
  static get propTypes() {
    return {
      id: React.PropTypes.string,
      children: React.PropTypes.element,
    };
  }
  static get childContextTypes() {
    return {
      id: React.PropTypes.string,
    };
  }
  constructor() {
    super();

    const childElement = React.Children.only(this.props.children).type;

    this.ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(childElement);
  }
  getChildContext = () => ({
    id: this.props.id,
  });
  render() {
    const ConnectedPlayer = this.ConnectedPlayer;

    return <ConnectedPlayer id={this.props.id} />;
  }
}

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
          <WrappedPlayer>
            <Player id={Player.options.id} />
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
