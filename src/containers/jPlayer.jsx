import { connectWithId } from '../util/index';
import JPlayer from '../components/jPlayer';
import actions, { setMedia } from '../actions/jPlayerActions';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  timeFormats: jPlayers[id].timeFormats,
  mediaSettings: jPlayers[id].mediaSettings,
  media: jPlayers[id].media,
  supplied: jPlayers[id].supplied,
  error: jPlayers[id].error,
  paused: jPlayers[id].paused,
  fullScreen: jPlayers[id].fullScreen,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  seeking: jPlayers[id].seeking,
  loop: jPlayers[id].loop,
  shuffled: jPlayers[id].shuffled,
  keyEnabled: jPlayers[id].keyEnabled,
  id,
  children,
  ...attributes,
});

export const mapDispatchToProps = (dispatch, { id }) => ({
  setMedia: media => dispatch(setMedia(media, id)),
  updateOption: (key, value) => dispatch(actions.updateOption(key, value, id)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(JPlayer);
