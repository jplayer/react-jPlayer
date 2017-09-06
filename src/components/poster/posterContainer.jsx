import { connectWithId } from 'react-jplayer-utils';

import Poster from './poster';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  src: jPlayers[id].media.poster,
});

export default connectWithId(mapStateToProps)(Poster);
