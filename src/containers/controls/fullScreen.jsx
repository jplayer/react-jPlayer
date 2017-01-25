import { connectWithId } from '../../util/index';
import { setFullScreen } from '../../actions/jPlayerActions';
import FullScreen from '../../components/controls/fullScreen';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  fullScreen: jPlayers[uid].fullScreen,
});

const mergeProps = ({ fullScreen }, { dispatch }, { uid, children, ...attributes }) => ({
  onClick: () => dispatch(setFullScreen(!fullScreen, uid)),
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(FullScreen);
