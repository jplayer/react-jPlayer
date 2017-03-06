import { connectWithId } from '../../util/index';
import Download from './download';

const mapStateToProps = ({ jPlayers }, { uid, ...attributes }) => ({
  free: jPlayers[uid].media.free,
  url: jPlayers[uid].src,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Download);
