import { connectWithId } from '../../util/index';
import { setFullScreen } from '../../actions/actions';
import FullScreen from './fullScreen';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  fullScreen: jPlayers[id].fullScreen,
  children,
  attributes,
});

const mapDispatchToProps = (dispatch, { id }) => ({
  onClick: fullScreen => dispatch(setFullScreen(id, !fullScreen)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(FullScreen);
