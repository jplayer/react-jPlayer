import { connectWithId } from '../util/index';
import CurrentTime from '../components/currentTime';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  currentTimeText: jPlayers[id].currentTimeText,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(CurrentTime);
