import { connectWithId } from '../../util/index';
import Video from './video';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  require: jPlayers[id].mediaSettings.video,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Video);
