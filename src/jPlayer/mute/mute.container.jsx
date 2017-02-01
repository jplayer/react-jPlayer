import { connectWithId } from '../../util/index';
import { setMute } from '../_actions/actions';
import Mute from './mute';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  muted: jPlayers[uid].muted,
});

const mergeProps = ({ muted }, { dispatch }, { uid, ...attributes }) => ({
  onClick: () => dispatch(setMute(!muted, uid)),
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Mute);
