import { connectWithId } from '../../util/index';
import { setOption } from '../_actions/actions';
import Gui from './gui';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  fullScreen: jPlayers[uid].fullScreen,
  guiFadeOut: jPlayers[uid].guiFadeOut,
  guiFadeHoldTimeout: jPlayers[uid].guiFadeHoldTimeout,
});

const mergeProps = ({ fullScreen, guiFadeOut, guiFadeHoldTimeout }, { dispatch },
{ uid, ...attributes }) => ({
  onMouseEnter: () => {
    if (fullScreen) {
      dispatch(setOption('guiFadeOut', false, uid));
      clearTimeout(guiFadeHoldTimeout);
    }
  },
  guiFadeOut,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Gui);
