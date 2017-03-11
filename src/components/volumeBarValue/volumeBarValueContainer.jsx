import { connectWithId } from '../../util/index';
import VolumeBarValue from './volumeBarValue';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  verticalVolume: jPlayers[id].verticalVolume,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeBarValue);
