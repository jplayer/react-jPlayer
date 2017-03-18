import { connectWithId } from '../../util/index';
import { setOption } from '../../actions/actions';
import Repeat from './repeat';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  loop: jPlayers[id].loop,
  children,
  attributes,
});

const mapDispatchToProps = (dispatch, { id }) => ({
  onClick: loop => dispatch(setOption(id, 'loop', !loop)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(Repeat);
