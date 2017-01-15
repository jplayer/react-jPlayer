import { connectWithId } from '../../util/index';
import { setVolume, setMute } from '../../actions/jPlayerActions';
import VolumeMax from '../../components/controls/volumeMax';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  muted: jPlayers[id].muted,
});

const mergeProps = ({ muted }, { dispatch }, { id, children, ...attributes }) => ({
  onClick: () => {
    dispatch(setVolume(1, id));

    if (muted) {
      dispatch(setMute(false, id));
    }
  },
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeMax);
