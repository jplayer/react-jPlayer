import { connectWithId, formatArtistAndTitle } from 'react-jplayer-utils';

import Title from './title';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  title: formatArtistAndTitle(jPlayers[id].media.artist, jPlayers[id].media.title),
});

export default connectWithId(mapStateToProps)(Title);
