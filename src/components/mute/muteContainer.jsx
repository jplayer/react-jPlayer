import { connectWithId } from 'react-jplayer-utils';
import { setMute } from '../../actions/actions';
import Mute from './mute';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  muted: jPlayers[id].muted,
  id,
  children,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, muted) => dispatch(setMute(id, !muted)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(Mute);
