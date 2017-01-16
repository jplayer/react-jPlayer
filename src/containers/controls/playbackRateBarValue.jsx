import { connectWithId } from '../../util/index';
import PlaybackRateBarValue from '../../components/controls/playbackRateBarValue';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  ...attributes,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({ ...ownProps, ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(PlaybackRateBarValue);
