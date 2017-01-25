import { connectWithId } from '../util/index';
import Video from '../components/video';

const mapStateToProps = ({ jPlayers }, { uid, children, ...attributes }) => ({
  require: jPlayers[uid].mediaSettings.video,
  children,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Video);
