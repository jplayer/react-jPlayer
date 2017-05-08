import { connectWithId } from 'react-jplayer-utils';
import CurrentTime from './currentTime';

const mapStateToProps = ({ jPlayers }, { id, children }) => ({
  children: children || jPlayers[id].currentTimeText,
});

export default connectWithId(mapStateToProps, {})(CurrentTime);
