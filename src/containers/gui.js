import { connectWithId } from '../util/index';
import actions from '../actions/jPlayerActions';
import Gui from '../components/gui';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  fullScreen: jPlayers[id].fullScreen,
  guiFadeOut: jPlayers[id].guiFadeOut,
  guiFadeHoldTimeout: jPlayers[id].guiFadeHoldTimeout,
});

const mergeProps = ({ fullScreen, guiFadeOut, guiFadeHoldTimeout }, { dispatch },
{ id, children, ...attributes }) => ({
  onMouseEnter: () => {
    if (fullScreen) {
      dispatch(actions.updateOption('guiFadeOut', false, id));
      clearTimeout(guiFadeHoldTimeout);
    }
  },
  guiFadeOut,
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Gui);
