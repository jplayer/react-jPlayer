import { connectWithId } from 'react-jplayer-utils';
import PlayBarAnimation from './animation';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  smoothPlayBar: jPlayers[id].smoothPlayBar,
  currentPercentAbsolute: jPlayers[id].currentPercentAbsolute,
  currentPercentRelative: jPlayers[id].currentPercentRelative,
});

export default connectWithId(mapStateToProps)(PlayBarAnimation);
