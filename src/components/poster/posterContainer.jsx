import { connectWithId } from 'react-jplayer-utils';
import Poster from './poster';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  src: jPlayers[id].media.poster,
  attributes,
});

export default connectWithId(mapStateToProps)(Poster);
