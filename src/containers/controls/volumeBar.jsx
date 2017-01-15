import { connectWithId } from '../../util/index';
import { setVolume } from '../../actions/jPlayerActions';
import VolumeBar from '../../components/controls/volumeBar';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  verticalVolume: jPlayers[id].verticalVolume,
  barDrag: jPlayers[id].barDrag,
  children,
  ...attributes,
});

const mapDispatchToProps = ({ dispatch }, { id }) => ({
  volume: newVolume => dispatch(setVolume(newVolume, id)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(VolumeBar);
