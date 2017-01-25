import { connectWithId } from '../../util/index';
import Duration from './duration';

const mapStateToProps = ({ jPlayers }, { uid, ...attributes }) => ({
  children: jPlayers[uid].durationText,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Duration);
