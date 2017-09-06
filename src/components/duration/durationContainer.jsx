import { connectWithId } from 'react-jplayer-utils';

import Duration from './duration';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  durationText: jPlayers[id].durationText,
});

export default connectWithId(mapStateToProps)(Duration);
