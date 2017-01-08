import { connectWithId } from '../util/index';
import Buffer from '../components/buffer';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  bufferedTimeRanges: jPlayers[id].bufferedTimeRanges,
  duration: jPlayers[id].duration,
  bufferColour: jPlayers[id].bufferColour,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(Buffer);
