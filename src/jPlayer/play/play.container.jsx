import { play, pause } from '../_actions/actions';
import { connectWithId } from '../../util/index';
import Play from './play';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  paused: jPlayers[uid].paused,
});

const mergeProps = ({ paused }, { dispatch }, { uid }) => ({
  onClick: () => (paused ? dispatch(play(uid)) : dispatch(pause(uid))),
});

export default connectWithId(mapStateToProps, null, mergeProps)(Play);
