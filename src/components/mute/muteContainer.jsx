import { connectWithId } from '../../util/index';
import { setMute } from '../../actions/actions';
import Mute from './mute';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  muted: jPlayers[id].muted,
  children,
  attributes,
});

const mapDispatchToProps = (dispatch, { id }) => ({
  onClick: muted => dispatch(setMute(id, !muted)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(Mute);
