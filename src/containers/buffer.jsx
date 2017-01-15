import { connectWithId } from '../util/index';
import Buffer from '../components/buffer';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  bufferedTimeRanges: jPlayers[id].bufferedTimeRanges,
  duration: jPlayers[id].duration,
  bufferColour: jPlayers[id].bufferColour,
  ...attributes,
});

export default connectWithId(mapStateToProps)(Buffer);
