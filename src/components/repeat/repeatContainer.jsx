import { connectWithId } from '../../util/index';
import { setLoop } from '../../actions/actions';
import Repeat from './repeat';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  loop: jPlayers[id].loop,
});

const mergeProps = ({ loop }, { dispatch }, { id, ...attributes }) => ({
  onClick: () => dispatch(setLoop(id, !loop)),
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Repeat);
