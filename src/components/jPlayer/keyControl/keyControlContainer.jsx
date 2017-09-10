import { connectWithId, KeyControl } from 'react-jplayer-utils';
import merge from 'lodash.merge';

import { setOption, play, pause, setMute, setVolume } from '../../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  paused: jPlayers[id].paused,
  fullScreen: jPlayers[id].fullScreen,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  id,
});

const mergeProps = (stateProps, { dispatch }, { keyBindings, id }) => ({
  keyBindings: merge({}, {
    play: {
      key: 80, // p
      fn: () => (stateProps.paused ? dispatch(play(id)) :
        dispatch(pause(id))),
    },
    fullScreen: {
      key: 70, // f
      fn: () => dispatch(setOption(id, 'fullScreen', !stateProps.fullScreen)),
    },
    mute: {
      key: 77, // m
      fn: () => dispatch(setMute(id, !stateProps.muted)),
    },
    volumeUp: {
      key: 190, // .
      fn: () => {
        dispatch(setVolume(id, stateProps.volume + 0.1));
      },
    },
    volumeDown: {
      key: 188, // ,
      fn: () => dispatch(setVolume(id, stateProps.volume - 0.1)),
    },
    loop: {
      key: 76, // l
      fn: () => dispatch(setOption(id, 'loop', !stateProps.loop)),
    },
  }, keyBindings),
});

export default connectWithId(mapStateToProps, null, mergeProps)(KeyControl);
