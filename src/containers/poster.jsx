import { connectWithId } from '../util/index';
import Poster from '../components/poster';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  src: jPlayers[id].media.poster,
  attributes,
});

export default connectWithId(mapStateToProps)(Poster);
