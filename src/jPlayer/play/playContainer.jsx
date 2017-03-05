import { play, pause } from '../_actions/actions';
import { connectWithId } from '../../util/index';
import Play from './play';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  paused: jPlayers[uid].paused,
});

const mergeProps = ({ paused }, { dispatch }, ownProps) => ({
  onClick: () => (paused ? dispatch(play(ownProps.uid)) : dispatch(pause(ownProps.uid))),
  ...ownProps,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Play);
