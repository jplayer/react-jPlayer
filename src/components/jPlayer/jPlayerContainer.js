import PropTypes from 'prop-types';
import { compose, lifecycle as setLifecycle, withHandlers, withContext } from 'recompose';
import { canSetVolume, connectWithId } from 'react-jplayer-utils';

import states from './states/states';
import JPlayer from './jPlayer';
import { setOption, setMedia } from '../../actions/actions';

const mapStateToProps = ({ jPlayers }, ownProps) => {
  const { id, keyBindings, children,
    className } = ownProps;

  return {
    media: jPlayers[id].media,
    fullScreen: jPlayers[id].fullScreen,
    paused: jPlayers[id].paused,
    startGuiFadeOut: jPlayers[id].startGuiFadeOut,
    keyBindings,
    id,
    children,
    className: states(jPlayers[id], ownProps.states, className),
  };
};

const handlers = {
  onMouseMoveCapture: props => () => {
    if (props.fullScreen) {
      if (props.paused || props.startGuiFadeOut) {
        props.setOption(props.id, 'startGuiFadeOut', false);
      } else {
        props.setOption(props.id, 'startGuiFadeOut', true);
      }
    }
  },
};

const lifecycle = {
  componentDidMount() {
    if (Object.keys(this.props.media.sources).length > 0) {
      this.props.setMedia(this.props.id, this.props.media);
    }

    this.props.setOption(this.props.id, 'volumeSupported', canSetVolume());
  },
};

export default compose(
  withContext({ id: PropTypes.string }, ({ id }) => ({ id })),
  connectWithId(mapStateToProps, {
    setMedia,
    setOption,
  }),
  withHandlers(handlers),
  setLifecycle(lifecycle),
)(JPlayer);
