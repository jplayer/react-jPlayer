import { play, pause } from '../../actions/jPlayerActions';
import { connectWithId } from '../../util/index';
import Play from '../../components/controls/play';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  paused: jPlayers[uid].paused,
});

const mergeProps = ({ paused }, { dispatch }, { uid, children, ...attributes }) => ({
  onClick: () => (paused ? dispatch(play(uid)) : dispatch(pause(uid))),
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Play);
