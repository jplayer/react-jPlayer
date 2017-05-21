import { connectWithId } from 'react-jplayer-utils';
import Duration from './duration';

const mapStateToProps = ({ jPlayers }, { id, children }) => ({
  children: children || jPlayers[id].durationText,
});

export default connectWithId(mapStateToProps, {})(Duration);
