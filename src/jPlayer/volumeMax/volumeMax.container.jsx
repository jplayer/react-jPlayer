import { connectWithId } from '../../util/index';
import { setVolume, setMute } from '../actions';
import VolumeMax from './volumeMax';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  muted: jPlayers[uid].muted,
});

const mergeProps = ({ muted }, { dispatch }, { uid, ...attributes }) => ({
  onClick: () => {
    dispatch(setVolume(uid, 1));

    if (muted) {
      dispatch(setMute(false, uid));
    }
  },
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeMax);
