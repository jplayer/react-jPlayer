import { connectWithId } from '../util/index';
import Video from '../components/video';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  require: jPlayers[id].mediaSettings.video,
  children,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Video);
