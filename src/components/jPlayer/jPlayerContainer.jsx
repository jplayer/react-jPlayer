import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, lifecycle, withHandlers, setPropTypes, withContext } from 'recompose';

import states from './states/states';
import JPlayer from './jPlayer';
import formatPropTypes from '../../util/formatPropTypes';
import { defaultOptions } from '../../util/constants';
import { setOption, setMedia } from '../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id, customStates, keyBindings, ...attributes }) => ({
  media: jPlayers[id].media,
  fullScreen: jPlayers[id].fullScreen,
  paused: jPlayers[id].paused,
  startGuiFadeOut: jPlayers[id].startGuiFadeOut,
  keyBindings,
  id,
  attributes,
  className: states(jPlayers[id], customStates, attributes.className),
});

const propTypes = {
  className: PropTypes.string.isRequired,
  keyBindings: PropTypes.object,
  attributes: PropTypes.object,
  media: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    sources: PropTypes.shape(formatPropTypes).isRequired,
    poster: PropTypes.string,
    free: PropTypes.bool,
  }),
  id: PropTypes.string.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  setMedia: PropTypes.func.isRequired,
  startGuiFadeOut: PropTypes.bool.isRequired,
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

export default compose(
  connect(mapStateToProps, {
    setMedia,
    setOption,
  }),
  setPropTypes(propTypes),
  withContext({ id: PropTypes.string }, ({ id }) => ({ id })),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      if (this.props.media !== defaultOptions.media) {
        this.props.setMedia(this.props.id, this.props.media);
      }
    },
  }),
)(JPlayer);
