import { connectWithId } from '../../util/index';
import { setFullScreen } from '../_actions/actions';
import FullScreen from './fullScreen';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  fullScreen: jPlayers[uid].fullScreen,
});

const mergeProps = ({ fullScreen }, { dispatch }, { uid, ...attributes }) => ({
  onClick: () => dispatch(setFullScreen(!fullScreen, uid)),
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(FullScreen);
