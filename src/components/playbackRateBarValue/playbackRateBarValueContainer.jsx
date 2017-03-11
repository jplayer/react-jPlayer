import { connectWithId } from '../../util/index';
import PlaybackRateBarValue from './playbackRateBarValue';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(PlaybackRateBarValue);
