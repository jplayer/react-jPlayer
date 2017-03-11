import { connectWithId } from '../../util/index';
import { setFullScreen } from '../../actions/actions';
import FullScreen from './fullScreen';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  fullScreen: jPlayers[id].fullScreen,
});

const mergeProps = ({ fullScreen }, { dispatch }, { id, ...attributes }) => ({
  onClick: () => dispatch(setFullScreen(!fullScreen, id)),
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(FullScreen);
