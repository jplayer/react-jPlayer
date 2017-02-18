import { connectWithId } from '../../util/index';
import { setOption } from '../_actions/actions';
import Gui from './gui';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  fullScreen: jPlayers[uid].fullScreen,
  paused: jPlayers[uid].paused,
  guiFadeOut: jPlayers[uid].guiFadeOut,
  guiFadeHoldTimeout: jPlayers[uid].guiFadeHoldTimeout,
});

const mergeProps = ({ fullScreen, paused, guiFadeOut, guiFadeHoldTimeout }, { dispatch },
{ uid, ...attributes }) => ({
  onMouseMove: () => {
    if (fullScreen && !paused) {
      dispatch(setOption('guiFadeOut', false, uid));
      clearTimeout(guiFadeHoldTimeout);
    }
  },
  fullScreen,
  guiFadeOut,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Gui);
