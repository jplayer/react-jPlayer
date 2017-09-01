import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, lifecycle as setLifecycle, withHandlers, withContext, mapProps } from 'recompose';
import { canSetVolume } from 'react-jplayer-utils';

import states from './states/states';
import JPlayer from './jPlayer';
import { defaultOptions } from '../../util/constants';
import { setOption, setMedia } from '../../actions/actions';

const mapStateToProps = ({ jPlayers }, ownProps) => {
  const { id, customStates, keyBindings, children,
    className } = ownProps;

  return {
    media: jPlayers[id].media,
    fullScreen: jPlayers[id].fullScreen,
    paused: jPlayers[id].paused,
    startGuiFadeOut: jPlayers[id].startGuiFadeOut,
    keyBindings,
    id,
    children,
    className: states(jPlayers[id], customStates, className),
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
    if (this.props.media !== defaultOptions.media) {
      this.props.setMedia(this.props.id, this.props.media);
    }

    this.props.setOption(this.props.id, 'volumeSupported', canSetVolume());
  },
};

const propsMapper = props => ({
  className: props.className,
  keyBindings: props.keyBindings,
  children: props.children,
  id: props.id,
  onMouseMoveCapture: props.onMouseMoveCapture,
});

export default compose(
  withContext({ id: PropTypes.string }, ({ id }) => ({ id })),
  connect(mapStateToProps, {
    setMedia,
    setOption,
  }),
  withHandlers(handlers),
  setLifecycle(lifecycle),
  mapProps(propsMapper),
)(JPlayer);
