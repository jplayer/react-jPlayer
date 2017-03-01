import { connectWithId } from '../../util/index';
import Poster from './poster';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  src: jPlayers[uid].media.poster,
});

export default connectWithId(mapStateToProps)(Poster);
