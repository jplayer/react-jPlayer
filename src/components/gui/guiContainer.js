import { lifecycle, withHandlers, compose, mapProps } from 'recompose';
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
};

const lifecycleFunctions = {
  fadeOutHandler() {
    this.props.setOption(this.props.id, 'guiFadeOut', true);
  },
  startFade() {
    if (this.props.fullScreen && !this.props.paused && this.props.startGuiFadeOut) {
      timeoutIds.push(setTimeout(this.fadeOutHandler, this.props.guiFadeHoldTime));
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
  lifecycle(lifecycleFunctions),
  mapProps(props => ({
    fullScreen: props.fullScreen,
    guiFadeOut: props.guiFadeOut,
    onMouseMove: props.onMouseMove,
    ...props.attributes,
  })),
)(GuiAnimation);
