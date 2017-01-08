import { connectWithId, getWidth, getHeight, getOffset } from '../../util/index';
import { volume } from '../../actions/jPlayerActions';
import VolumeBar from '../../components/controls/volumeBar';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  verticalVolume: jPlayers[id].verticalVolume,
  noVolume: jPlayers[id].noVolume,
  muted: jPlayers[id].muted,
  barDrag: jPlayers[id].barDrag,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => {
  let dragging = false;
  let volumeBar;

  const moveVolumeBar = (e) => {
    const offset = getOffset(volumeBar);
    const x = e.pageX - offset.left;
    const w = getWidth(volumeBar);
    const y = (getHeight(volumeBar) - e.pageY) + offset.top;
    const h = getHeight(volumeBar);

    if (stateProps.verticalVolume) {
      dispatch(volume(y / h, id));
    } else {
      dispatch(volume(x / w, id));
    }
  };

  return {
    onClick: e => moveVolumeBar(e),
    onMouseMove: e => (stateProps.barDrag && dragging ? moveVolumeBar(e) : null),
    onMouseDown: () => {
      dragging = true;
    },
    onMouseUp: () => {
      dragging = false;
    },
    setVolumeBar: (ref) => {
      volumeBar = ref;
    },
    children: stateProps.children,
    attributes: stateProps.attributes,
  };
};

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeBar);
