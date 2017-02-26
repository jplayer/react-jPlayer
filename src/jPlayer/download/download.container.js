import { connectWithId } from '../../util/index';
import Download from './download';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  free: jPlayers[uid].media.free,
  url: jPlayers[uid].src,
});

export default connectWithId(mapStateToProps)(Download);
