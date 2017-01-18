import { connectWithId } from '../util/index';
import Video from '../components/video';

const mapStateToProps = ({ jPlayers }, { id, children, ...props }) => ({
  require: jPlayers[id].mediaSettings.video,
  children,
  ...props,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Video);
