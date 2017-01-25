import { connectWithId } from '../../util/index';
import { setVolume, setMute } from '../../actions/jPlayerActions';
import VolumeMax from '../../components/controls/volumeMax';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  muted: jPlayers[uid].muted,
});

const mergeProps = ({ muted }, { dispatch }, { uid, children, ...attributes }) => ({
  onClick: () => {
    dispatch(setVolume(1, uid));

    if (muted) {
      dispatch(setMute(false, uid));
    }
  },
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeMax);
