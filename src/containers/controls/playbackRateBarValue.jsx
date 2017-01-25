import { connectWithId } from '../../util/index';
import PlaybackRateBarValue from '../../components/controls/playbackRateBarValue';

const mapStateToProps = ({ jPlayers }, { uid, ...attributes }) => ({
  verticalPlaybackRate: jPlayers[uid].verticalPlaybackRate,
  minPlaybackRate: jPlayers[uid].minPlaybackRate,
  maxPlaybackRate: jPlayers[uid].maxPlaybackRate,
  playbackRate: jPlayers[uid].playbackRate,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(PlaybackRateBarValue);
