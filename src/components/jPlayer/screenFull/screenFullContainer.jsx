import screenfull from 'screenfull';
import { connectWithId } from 'react-jplayer-utils';
import { compose, lifecycle, withHandlers } from 'recompose';

import { setOption } from '../../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  fullScreen: jPlayers[id].fullScreen,
});

const handlers = {
  closeFullScreenListener: props => () => {
    if (!screenfull.isFullscreen && props.fullScreen) {
      props.setOption(props.id, 'fullScreen', false);
    }
  },
  requestFullScreen: props => () => {
    if (props.fullScreen) {
      if (screenfull.enabled) {
        screenfull.request(props.jPlayer);
      }
      // Legacy browsers don't implement full screen api
      // Safari 5.1 doesn't hide the other elements even with fullscreen api
      document.body.style.visibility = 'hidden';
    }
  },
  exitFullScreen: props => () => {
    if (!props.fullScreen) {
      if (screenfull.enabled) {
        screenfull.exit();
      }
      document.body.style.visibility = 'visible';
    }
  },
};

const lifecycleFunctions = {
  componentDidMount() {
    if (screenfull.enabled) {
      document.addEventListener(screenfull.raw.fullscreenchange,
        this.props.closeFullScreenListener);
    }
    this.props.requestFullScreen();
  },
  componentDidUpdate(prevProps) {
    this.props.requestFullScreen();
    if (prevProps.fullScreen !== this.props.fullScreen) {
      this.props.exitFullScreen();
    }
  },
  componentWillUnmount() {
    if (screenfull.enabled) {
      document.removeEventListener(screenfull.raw.fullscreenchange,
        this.props.closeFullScreenListener);
    }
  },
};

export default compose(
  connectWithId(mapStateToProps, {
    setOption,
  }),
  withHandlers(handlers),
  lifecycle(lifecycleFunctions),
)(() => null);
