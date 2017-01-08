import { play, pause } from '../../actions/jPlayerActions';
import { connectWithId } from '../../util/index';
import Play from '../../components/controls/play';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  paused: jPlayers[id].paused,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  onClick: () => (stateProps.paused ? dispatch(play(id)) : dispatch(pause(id))),
  children: stateProps.children,
  attributes: stateProps.attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Play);
