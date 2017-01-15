import { connectWithId } from '../../util/index';
import { setPlaybackRate } from '../../actions/jPlayerActions';
import PlaybackRateBar from '../../components/controls/values/playbackRateBar';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  barDrag: jPlayers[id].barDrag,
  children,
  ...attributes,
});

const mapDispatchToProps = ({ dispatch }, { id }) => ({
  setPlaybackRate: newPlaybackRate => dispatch(setPlaybackRate(newPlaybackRate, id)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(PlaybackRateBar);
