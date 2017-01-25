import { connectWithId } from '../../util/index';
import { setFullScreen } from '../actions';
import FullScreen from './fullScreen';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  fullScreen: jPlayers[uid].fullScreen,
});

const mergeProps = ({ fullScreen }, { dispatch }, { uid, children, ...attributes }) => ({
  onClick: () => dispatch(setFullScreen(!fullScreen, uid)),
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(FullScreen);
