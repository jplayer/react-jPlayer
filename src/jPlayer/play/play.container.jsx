import { play, pause } from '../actions';
import { connectWithId } from '../../util/index';
import Play from './play';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  paused: jPlayers[uid].paused,
});

const mergeProps = ({ paused }, { dispatch }, { uid, ...attributes }) => ({
  onClick: () => (paused ? dispatch(play(uid)) : dispatch(pause(uid))),
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Play);
