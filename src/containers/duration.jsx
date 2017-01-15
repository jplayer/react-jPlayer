import { duration } from '../actions/jPlayerActions';
import { connectWithId } from '../util/index';
import Duration from '../components/duration';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  toggleDuration: jPlayers[id].toggleDuration,
  captureDuration: jPlayers[id].captureDuration,
  durationText: jPlayers[id].durationText,
});

const mergeProps = ({ toggleDuration, captureDuration, durationText },
{ dispatch }, { id, ...attributes }) => ({
  onClick: (e) => {
    if (toggleDuration) {
      if (captureDuration) {
        e.stopPropagation();
      }
      dispatch(duration(id));
    }
  },
  durationText,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Duration);
