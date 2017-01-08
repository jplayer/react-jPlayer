import { connectWithId } from '../../util/index';
import { volume, mute } from '../../actions/jPlayerActions';
import VolumeMax from '../../components/controls/volumeMax';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  muted: jPlayers[id].muted,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  onClick: () => {
    dispatch(volume(1));

    if (stateProps.muted) {
      dispatch(mute(false, id));
    }
  },
  children: stateProps.children,
  attributes: stateProps.attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeMax);
