import { connectWithId } from 'react-jplayer-utils';

import Download from './download';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  free: jPlayers[id].media.free,
  url: jPlayers[id].src,
});

export default connectWithId(mapStateToProps)(Download);
