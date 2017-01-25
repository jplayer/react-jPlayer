import { connectWithId } from '../util/index';
import Poster from '../components/poster';

const mapStateToProps = ({ jPlayers }, { uid, alt, ...attributes }) => ({
  src: jPlayers[uid].media.poster,
  paused: jPlayers[uid].paused,
  currentTime: jPlayers[uid].currentTime,
  video: jPlayers[uid].mediaSettings.video,
  alt,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Poster);
