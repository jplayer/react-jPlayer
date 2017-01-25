import { connectWithId } from '../../util/index';
import { setMute } from '../../actions/jPlayerActions';
import Mute from '../../components/controls/mute';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  muted: jPlayers[uid].muted,
});

const mergeProps = ({ muted }, { dispatch }, { uid, children, ...attributes }) => ({
  onClick: () => dispatch(setMute(!muted, uid)),
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Mute);
