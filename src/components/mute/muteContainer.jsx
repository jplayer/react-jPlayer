import { connectWithId } from '../../util/index';
import { setMute } from '../../actions/actions';
import Mute from './mute';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  muted: jPlayers[id].muted,
});

const mergeProps = ({ muted }, { dispatch }, { id, ...attributes }) => ({
  onClick: () => dispatch(setMute(!muted, id)),
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Mute);
