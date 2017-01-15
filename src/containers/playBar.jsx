import { connectWithId } from '../util/index';
import PlayBar from '../components/playBar';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  smoothPlayBar: jPlayers[id].smoothPlayBar,
  currentPercentAbsolute: jPlayers[id].currentPercentAbsolute,
  currentPercentRelative: jPlayers[id].currentPercentRelative,
  currentTime: jPlayers[id].currentTime,
  duration: jPlayers[id].duration,
  playHeadPercent: jPlayers[id].playHeadPercent,
  ...attributes,
});

export default connectWithId(mapStateToProps)(PlayBar);
