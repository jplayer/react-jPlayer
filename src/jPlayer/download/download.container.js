import { connectWithId } from '../../util/index';
import Download from './download';

const mapStateToProps = ({ jPlayers }, { uid, children, ...attributes }) => ({
  free: jPlayers[uid].media.free,
  href: jPlayers[uid].src,
  children,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Download);
