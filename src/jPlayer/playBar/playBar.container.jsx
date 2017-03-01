import { connectWithId } from '../../util/index';
import PlayBar from './playBar';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  smoothPlayBar: jPlayers[uid].smoothPlayBar,
  currentPercentAbsolute: jPlayers[uid].currentPercentAbsolute,
  currentPercentRelative: jPlayers[uid].currentPercentRelative,
});

export default connectWithId(mapStateToProps)(PlayBar);
