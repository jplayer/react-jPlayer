import { connectWithId } from '../../util/index';
import { mute } from '../../actions/jPlayerActions';
import Mute from '../../components/controls/mute';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  muted: jPlayers[id].muted,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  onClick: () => dispatch(mute(!stateProps.muted, id)),
  children: stateProps.children,
  attributes: stateProps.attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Mute);
