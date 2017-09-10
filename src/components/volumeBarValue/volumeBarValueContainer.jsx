import { connectWithId } from 'react-jplayer-utils';
import VolumeBarValue from './volumeBarValue';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  verticalVolume: jPlayers[id].verticalVolume,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
});

export default connectWithId(mapStateToProps)(VolumeBarValue);
