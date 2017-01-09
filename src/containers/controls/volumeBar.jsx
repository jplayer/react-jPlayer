import { connectWithId } from '../../util/index';
import { volume } from '../../actions/jPlayerActions';
import VolumeBar from '../../components/controls/volumeBar';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  verticalVolume: jPlayers[id].verticalVolume,
  barDrag: jPlayers[id].barDrag,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  volume: volumeValue => dispatch(volume(volumeValue, id)),
  ...stateProps,
});

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeBar);
