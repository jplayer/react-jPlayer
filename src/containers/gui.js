import { connectWithId } from '../util/index';
import actions from '../actions/jPlayerActions';
import Gui from '../components/gui';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  fullScreen: jPlayers[uid].fullScreen,
  guiFadeOut: jPlayers[uid].guiFadeOut,
  guiFadeHoldTimeout: jPlayers[uid].guiFadeHoldTimeout,
});

const mergeProps = ({ fullScreen, guiFadeOut, guiFadeHoldTimeout }, { dispatch },
{ uid, children, ...attributes }) => ({
  onMouseEnter: () => {
    if (fullScreen) {
      dispatch(actions.updateOption('guiFadeOut', false, uid));
      clearTimeout(guiFadeHoldTimeout);
    }
  },
  guiFadeOut,
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Gui);
