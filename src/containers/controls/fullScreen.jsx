import { connectWithId } from '../../util/index';
import { setFullScreen } from '../../actions/jPlayerActions';
import FullScreen from '../../components/controls/fullScreen';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  fullScreen: jPlayers[id].fullScreen,
});

const mergeProps = ({ fullScreen }, { dispatch }, { id, children, ...attributes }) => ({
  onClick: () => dispatch(setFullScreen(!fullScreen, id)),
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(FullScreen);
