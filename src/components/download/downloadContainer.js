import { connectWithId } from '../../util/index';
import Download from './download';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  free: jPlayers[id].media.free,
  url: jPlayers[id].src,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Download);
