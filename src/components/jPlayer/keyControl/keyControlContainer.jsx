import { connectWithId } from 'react-jplayer-utils';
import { compose, lifecycle as setLifecycle, withHandlers, renderNothing } from 'recompose';
import merge from 'lodash.merge';

import { setOption, play, pause, setMute, setVolume } from '../../../actions/actions';
import { keyIgnoredElementNames } from '../../../util/constants';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  paused: jPlayers[id].paused,
  fullScreen: jPlayers[id].fullScreen,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  keyEnabled: jPlayers[id].keyEnabled,
  focused: jPlayers[id].focused,
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
  focused: stateProps.focused,
  keyEnabled: stateProps.keyEnabled,
});

const handlers = {
  onKeyDown: props => (event) => {
    if (keyIgnoredElementNames.some(name => name.toUpperCase()
        === event.target.nodeName.toUpperCase()) || !props.focused || !props.keyEnabled) {
      return;
    }

    Object.keys(props.keyBindings).forEach((key) => {
      const keyBinding = props.keyBindings[key];

      if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
        event.preventDefault();
        keyBinding.fn();
      }
    });
  },
};

const lifecycle = {
  componentDidMount() {
    document.addEventListener('keydown', this.props.onKeyDown);
  },
  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.onKeyDown);
  },
};

export default compose(
  connectWithId(mapStateToProps, null, mergeProps),
  withHandlers(handlers),
  setLifecycle(lifecycle),
)(renderNothing(null));
