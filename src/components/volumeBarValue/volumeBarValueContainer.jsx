import { connectWithId } from 'react-jplayer-utils';
import VolumeBarValue from './volumeBarValue';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  verticalVolume: jPlayers[id].verticalVolume,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(VolumeBarValue);
