import { connectWithId } from 'react-jplayer-utils';

import CurrentTime from './currentTime';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  currentTimeText: jPlayers[id].currentTimeText,
});

export default connectWithId(mapStateToProps)(CurrentTime);
