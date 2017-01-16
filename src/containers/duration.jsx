import { duration } from '../actions/jPlayerActions';
import { connectWithId } from '../util/index';
import Duration from '../components/duration';

const mapStateToProps = ({ jPlayers }, { id, children }) => ({
  toggleDuration: jPlayers[id].toggleDuration,
  captureDuration: jPlayers[id].captureDuration,
  children: children || jPlayers[id].durationText,
});

const mergeProps = ({ toggleDuration, captureDuration, children },
{ dispatch }, { id, ...attributes }) => ({
  onClick: (e) => {
    if (toggleDuration) {
      if (captureDuration) {
        e.stopPropagation();
      }
      dispatch(duration(id));
    }
  },
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Duration);
