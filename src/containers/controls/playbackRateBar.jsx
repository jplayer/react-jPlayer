import { connectWithId } from '../../util/index';
import { playbackRate } from '../../actions/jPlayerActions';
import PlaybackRateBar from '../../components/controls/playbackRateBar';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  barDrag: jPlayers[id].barDrag,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  playbackRate: playbackRateValue => dispatch(playbackRate(playbackRateValue, id)),
  ...stateProps,
});

export default connectWithId(mapStateToProps, null, mergeProps)(PlaybackRateBar);
