import { connectWithId } from '../util/index';
import Poster from '../components/poster';

const mapStateToProps = ({ jPlayers }, { id, alt, ...attributes }) => ({
  src: jPlayers[id].media.poster,
  paused: jPlayers[id].paused,
  currentTime: jPlayers[id].currentTime,
  video: jPlayers[id].mediaSettings.video,
  alt,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Poster);
