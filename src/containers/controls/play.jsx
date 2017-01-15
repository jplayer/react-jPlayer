import { play, pause } from '../../actions/jPlayerActions';
import { connectWithId } from '../../util/index';
import Play from '../../components/controls/play';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  paused: jPlayers[id].paused,
});

const mergeProps = ({ paused }, { dispatch }, { id, children, ...attributes }) => ({
  onClick: () => (paused ? dispatch(play(id)) : dispatch(pause(id))),
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Play);
