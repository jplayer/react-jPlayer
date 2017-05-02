import { connectWithId } from 'react-jplayer-utils';
import Download from './download';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  free: jPlayers[id].media.free,
  url: jPlayers[id].src,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(Download);
