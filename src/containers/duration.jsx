import { connectWithId } from '../util/index';
import Duration from '../components/duration';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  children: children || jPlayers[id].durationText,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Duration);
