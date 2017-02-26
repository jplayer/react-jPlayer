import { connectWithId } from '../../util/index';
import { setFullScreen } from '../_actions/actions';
import FullScreen from './fullScreen';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  fullScreen: jPlayers[uid].fullScreen,
});

const mergeProps = ({ fullScreen }, { dispatch }, { uid }) => ({
  onClick: () => dispatch(setFullScreen(!fullScreen, uid)),
});

export default connectWithId(mapStateToProps, null, mergeProps)(FullScreen);
