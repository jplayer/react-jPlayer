import { connectWithId } from '../../util/index';
import { setOption } from '../../actions/actions';
import FullScreen from './fullScreen';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  fullScreen: jPlayers[id].fullScreen,
  id,
  children,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, fullScreen) => dispatch(setOption(id, 'fullScreen', !fullScreen)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(FullScreen);
