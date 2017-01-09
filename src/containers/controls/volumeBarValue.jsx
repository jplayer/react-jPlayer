import { connectWithId } from '../../util/index';
import VolumeBarValue from '../../components/controls/volumeBarValue';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  verticalVolume: jPlayers[id].verticalVolume,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  attributes,
});

export default connectWithId(mapStateToProps)(VolumeBarValue);
