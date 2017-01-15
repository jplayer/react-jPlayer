import { connectWithId } from '../../util/index';
import { setMute } from '../../actions/jPlayerActions';
import Mute from '../../components/controls/mute';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  muted: jPlayers[id].muted,
});

const mergeProps = ({ muted }, { dispatch }, { id, children, ...attributes }) => ({
  onClick: () => dispatch(setMute(!muted, id)),
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Mute);
