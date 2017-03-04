import { connectWithId } from '../../util/index';
import PlaybackRateBarValue from './playbackRateBarValue';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  verticalPlaybackRate: jPlayers[uid].verticalPlaybackRate,
  minPlaybackRate: jPlayers[uid].minPlaybackRate,
  maxPlaybackRate: jPlayers[uid].maxPlaybackRate,
  playbackRate: jPlayers[uid].playbackRate,
});

export default connectWithId(mapStateToProps)(PlaybackRateBarValue);
