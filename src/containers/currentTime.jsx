import { connectWithId } from '../util/index';
import CurrentTime from '../components/currentTime';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  currentTimeText: jPlayers[id].currentTimeText,
  ...attributes,
});

export default connectWithId(mapStateToProps)(CurrentTime);
