import { connectWithId } from '../../util/index';
import { setOption } from '../../actions/actions';
import Repeat from './repeat';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  loop: jPlayers[id].loop,
  id,
  children,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, loop) => dispatch(setOption(id, 'loop', !loop)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(Repeat);
