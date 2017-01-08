import { connectWithId } from '../../util/index';
import PlaybackRateBarValue from '../../components/controls/playbackRateBarValue';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(PlaybackRateBarValue);
