import { duration } from '../actions/jPlayerActions';
import { connectWithId } from '../util/index';
import Duration from '../components/duration';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  toggleDuration: jPlayers[id].toggleDuration,
  captureDuration: jPlayers[id].captureDuration,
  durationText: jPlayers[id].durationText,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  onClick: (e) => {
    if (stateProps.toggleDuration) {
      if (stateProps.captureDuration) {
        e.stopPropagation();
      }
      dispatch(duration(id));
    }
  },
  children: stateProps.children,
  attributes: stateProps.attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Duration);
