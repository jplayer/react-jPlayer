import { connectWithId } from 'react-jplayer-utils';
import { setOption } from '../../actions/actions';
import Gui from './gui';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  fullScreen: jPlayers[id].fullScreen,
  paused: jPlayers[id].paused,
  guiFadeOut: jPlayers[id].guiFadeOut,
  guiFadeHoldTimeout: jPlayers[id].guiFadeHoldTimeout,
});

const mergeProps = (stateProps, { dispatch }, { id, ...attributes }) => ({
  onMouseMove: () => {
    if (stateProps.fullScreen && !stateProps.paused) {
      dispatch(setOption(id, 'guiFadeOut', false));
      clearTimeout(stateProps.guiFadeHoldTimeout);
    }
  },
  fullScreen: stateProps.fullScreen,
  guiFadeOut: stateProps.guiFadeOut,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Gui);
