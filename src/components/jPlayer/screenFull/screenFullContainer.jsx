import screenfull from 'screenfull';
import { connectWithId } from 'react-jplayer-utils';
import { compose, lifecycle } from 'recompose';

import { setOption } from '../../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  fullScreen: jPlayers[id].fullScreen,
});

const requestFullScreen = (jPlayer, fullScreen) => {
  if (fullScreen) {
    if (screenfull.enabled) {
      screenfull.request(jPlayer);
    }
    // Legacy browsers don't implement full screen api
    // Safari 5.1 doesn't hide the other elements even with fullscreen api
    document.body.style.visibility = 'hidden';
  }
};

const closeFullScreenListener = (fullScreen, id, dispatch) => () => {
  if (!screenfull.isFullscreen && fullScreen) {
    dispatch(setOption(id, 'fullScreen', false));
  }
};

const exitFullScreen = (fullScreen) => {
  if (!fullScreen) {
    if (screenfull.enabled) {
      screenfull.exit();
    }
    document.body.style.visibility = 'visible';
  }
};

export default compose(
  connectWithId(mapStateToProps),
  lifecycle({
    componentDidMount() {
      if (screenfull.enabled) {
        document.addEventListener(screenfull.raw.fullscreenchange,
           closeFullScreenListener(this.props.fullScreen, this.props.id, this.props.dispatch));
      }
      requestFullScreen(this.props.jPlayer, this.props.fullScreen);
    },
    componentDidUpdate(prevProps) {
      requestFullScreen(this.props.jPlayer, this.props.fullScreen);
      if (prevProps.fullScreen !== this.props.fullScreen) {
        exitFullScreen(this.props.fullScreen);
      }
    },
    componentWillUnmount() {
      if (screenfull.enabled) {
        document.removeEventListener(screenfull.raw.fullscreenchange,
           closeFullScreenListener(this.props.fullScreen, this.props.id, this.props.dispatch));
      }
    },
  }),
)(() => null);
