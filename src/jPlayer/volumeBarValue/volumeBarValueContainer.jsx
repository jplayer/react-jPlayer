import { connectWithId } from '../../util/index';
import VolumeBarValue from './volumeBarValue';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  verticalVolume: jPlayers[uid].verticalVolume,
  muted: jPlayers[uid].muted,
  volume: jPlayers[uid].volume,
});

export default connectWithId(mapStateToProps)(VolumeBarValue);
