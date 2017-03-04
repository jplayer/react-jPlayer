import { connectWithId } from '../../util/index';
import CurrentTime from './currentTime';

const mapStateToProps = ({ jPlayers }, { uid, children }) => ({
  children: children || jPlayers[uid].currentTimeText,
});

export default connectWithId(mapStateToProps)(CurrentTime);
