import { play, pause } from '../../actions/actions';
import { connectWithId } from '../../util/index';
import Play from './play';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  paused: jPlayers[id].paused,
  id,
  children,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, paused) => (paused ? dispatch(play(id)) : dispatch(pause(id))),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(Play);
