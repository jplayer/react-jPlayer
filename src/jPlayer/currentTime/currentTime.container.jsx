import { connectWithId } from '../../util/index';
import CurrentTime from './currentTime';

const mapStateToProps = ({ jPlayers }, { uid, ...attributes }) => ({
  children: jPlayers[uid].currentTimeText,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(CurrentTime);
