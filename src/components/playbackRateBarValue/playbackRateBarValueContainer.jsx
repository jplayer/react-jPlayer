import { connectWithId } from 'react-jplayer-utils';
import PlaybackRateBarValue from './playbackRateBarValue';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  attributes,
});

export default connectWithId(mapStateToProps)(PlaybackRateBarValue);
