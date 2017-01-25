import { connectWithId } from '../../util/index';
import VolumeBarValue from '../../components/controls/volumeBarValue';

const mapStateToProps = ({ jPlayers }, { uid, ...attributes }) => ({
  verticalVolume: jPlayers[uid].verticalVolume,
  muted: jPlayers[uid].muted,
  volume: jPlayers[uid].volume,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeBarValue);
