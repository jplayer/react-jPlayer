import { connectWithId } from '../util/index';
import Poster from '../components/poster';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  src: jPlayers[id].media.poster,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(Poster);
