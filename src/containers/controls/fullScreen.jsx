import { connectWithId } from '../../util/index';
import { fullScreen } from '../../actions/jPlayerActions';
import FullScreen from '../../components/controls/fullScreen';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  fullScreen: jPlayers[id].fullScreen,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  onClick: () => dispatch(fullScreen(!stateProps.fullScreen, id)),
  children: stateProps.children,
  attributes: stateProps.attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(FullScreen);
