import { connectWithId } from '../../util/index';
import VolumeBarValue from '../../components/controls/volumeBarValue';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  verticalVolume: jPlayers[id].verticalVolume,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(VolumeBarValue);
