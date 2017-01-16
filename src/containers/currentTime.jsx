import { connectWithId } from '../util/index';
import CurrentTime from '../components/currentTime';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  children: children || jPlayers[id].currentTimeText,
  ...attributes,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({ ...ownProps, ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(CurrentTime);
