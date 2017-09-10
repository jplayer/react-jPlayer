import screenfull from 'screenfull';
import { connectWithId } from 'react-jplayer-utils';
import { compose, lifecycle, withHandlers, renderNothing } from 'recompose';

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
};

const lifecycleFunctions = {
  requestFullScreen() {
    if (this.props.fullScreen) {
      if (screenfull.enabled) {
        screenfull.request(this.props.jPlayer);
      }
      // Legacy browsers don't implement full screen api
      // Safari 5.1 doesn't hide the other elements even with fullscreen api
      document.body.style.visibility = 'hidden';
    }
  },
  exitFullScreen() {
    if (!this.props.fullScreen) {
      if (screenfull.enabled) {
        screenfull.exit();
      }
      document.body.style.visibility = 'visible';
    }
  },
  componentDidMount() {
    if (screenfull.enabled) {
      document.addEventListener(screenfull.raw.fullscreenchange,
        this.props.closeFullScreenListener);
    }
    this.requestFullScreen();
  },
  componentDidUpdate(prevProps) {
    this.requestFullScreen();
    if (prevProps.fullScreen !== this.props.fullScreen) {
      this.exitFullScreen();
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
)(renderNothing(null));
