import { connectWithId } from '../../util/index';
import Duration from './duration';

const mapStateToProps = ({ jPlayers }, { uid, children }) => ({
  children: children || jPlayers[uid].durationText,
});

export default connectWithId(mapStateToProps)(Duration);
