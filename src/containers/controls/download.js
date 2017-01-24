import { connectWithId } from '../../util/index';
import Download from '../../components/controls/download';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  free: jPlayers[id].media.free,
  href: jPlayers[id].src,
  children,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Download);
