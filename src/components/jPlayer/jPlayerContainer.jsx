import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, lifecycle, withHandlers, setPropTypes, withContext, mapProps } from 'recompose';

import states from './states/states';
import JPlayer from './jPlayer';
import formatPropTypes from '../../util/formatPropTypes';
import { defaultOptions } from '../../util/constants';
import { setOption, setMedia } from '../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id, customStates, keyBindings, children,
  className, ...attributes }) => ({
  media: jPlayers[id].media,
  fullScreen: jPlayers[id].fullScreen,
  paused: jPlayers[id].paused,
  startGuiFadeOut: jPlayers[id].startGuiFadeOut,
  keyBindings,
  id,
  attributes,
  children,
  className: states(jPlayers[id], customStates, className),
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
  children: PropTypes.node.isRequired,
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

const propsMapper = props => ({
  className: props.className,
  keyBindings: props.keyBindings,
  children: props.children,
  id: props.id,
  onMouseMoveCapture: props.onMouseMoveCapture,
  ...props.attributes,
});

export default compose(
  withContext({ id: PropTypes.string }, ({ id }) => ({ id })),
  connect(mapStateToProps, {
    setMedia,
    setOption,
  }),
  setPropTypes(propTypes),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      if (this.props.media !== defaultOptions.media) {
        this.props.setMedia(this.props.id, this.props.media);
      }
    },
  }),
  mapProps(propsMapper),
)(JPlayer);
