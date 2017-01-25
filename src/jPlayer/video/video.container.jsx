import { connectWithId } from '../../util/index';
import Video from './video';

const mapStateToProps = ({ jPlayers }, { uid, children, ...attributes }) => ({
  require: jPlayers[uid].mediaSettings.video,
  children,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Video);
