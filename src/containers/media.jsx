import { connectWithId } from '../util/index';
import Media from '../components/media';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  loop: jPlayers[id].loop,
  remainingDuration: jPlayers[id].remainingDuration,
  src: jPlayers[id].src,
  newTime: jPlayers[id].newTime,
  playHeadPercent: jPlayers[id].playHeadPercent,
  paused: jPlayers[id].paused,
  defaultPlaybackRate: jPlayers[id].defaultPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  preload: jPlayers[id].preload,
  volume: jPlayers[id].volume,
  muted: jPlayers[id].muted,
  autoplay: jPlayers[id].autoplay,
  id,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(Media);
