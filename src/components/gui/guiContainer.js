import PropTypes from 'prop-types';
import { lifecycle, withHandlers, compose, mapProps, setPropTypes } from 'recompose';
import { connectWithId } from 'react-jplayer-utils';

import { setOption } from '../../actions/actions';
import GuiAnimation from './animation';

const timeoutIds = [];

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  fullScreen: jPlayers[id].fullScreen,
  paused: jPlayers[id].paused,
  startGuiFadeOut: jPlayers[id].startGuiFadeOut,
  guiFadeOut: jPlayers[id].guiFadeOut,
  guiFadeHoldTime: jPlayers[id].guiFadeHoldTime,
  attributes,
});

const handlers = {
  onMouseMove: props => () => {
    if (props.fullScreen) {
      props.setOption(props.id, 'startGuiFadeOut', false);

      timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
    }
  },
  fadeOutHandler: props => () => {
    props.setOption(props.id, 'guiFadeOut', true);
  },
};

const propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  startGuiFadeOut: PropTypes.bool.isRequired,
  guiFadeOut: PropTypes.bool.isRequired,
  guiFadeHoldTime: PropTypes.number.isRequired,
  setOption: PropTypes.func.isRequired,
  attributes: PropTypes.object.isRequired,
};

const lifecycleFunctions = {
  startFade() {
    if (this.props.fullScreen && !this.props.paused && this.props.startGuiFadeOut) {
      timeoutIds.push(setTimeout(this.props.fadeOutHandler, this.props.guiFadeHoldTime));
    } else if (!this.props.startGuiFadeOut) {
      this.props.setOption(this.props.id, 'guiFadeOut', false);
    }
  },
  componentDidUpdate(prevProps) {
    if (prevProps.startGuiFadeOut !== this.props.startGuiFadeOut) {
      this.startFade();
    }
  },
};

export default compose(
  connectWithId(mapStateToProps, {
    setOption,
  }),
  withHandlers(handlers),
  setPropTypes(propTypes),
  lifecycle(lifecycleFunctions),
  mapProps(props => ({
    fullScreen: props.fullScreen,
    guiFadeOut: props.guiFadeOut,
    onMouseMove: props.onMouseMove,
    ...props.attributes,
  })),
)(GuiAnimation);
