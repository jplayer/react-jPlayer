import { connectWithId } from '../../util/index';
import { setOption } from '../_actions/actions';
import Gui from './gui';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  fullScreen: jPlayers[uid].fullScreen,
  paused: jPlayers[uid].paused,
  guiFadeOut: jPlayers[uid].guiFadeOut,
  guiFadeHoldTimeout: jPlayers[uid].guiFadeHoldTimeout,
});

const mergeProps = (stateProps, { dispatch }, { uid, ...attributes }) => ({
  onMouseMove: () => {
    if (stateProps.fullScreen && !stateProps.paused) {
      dispatch(setOption('guiFadeOut', false, uid));
      clearTimeout(stateProps.guiFadeHoldTimeout);
    }
  },
  fullScreen: stateProps.fullScreen,
  guiFadeOut: stateProps.guiFadeOut,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Gui);
