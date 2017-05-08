import { connectWithId } from 'react-jplayer-utils';
import { setMute } from '../../actions/actions';
import Mute from './mute';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  muted: jPlayers[id].muted,
});

const mapDispatchToProps = {
  setMute,
};

export default connectWithId(mapStateToProps, mapDispatchToProps)(Mute);
