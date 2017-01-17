import { connectWithId } from '../util/index';
import Poster from '../components/poster';

const mapStateToProps = ({ jPlayers }, { id, alt, ...attributes }) => ({
  src: jPlayers[id].media.poster,
  paused: jPlayers[id].paused,
  currentTime: jPlayers[id].currentTime,
  alt,
  ...attributes,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({ ...ownProps, ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Poster);
