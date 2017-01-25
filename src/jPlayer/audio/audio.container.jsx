import { connectWithId } from '../../util/index';
import Audio from './audio';

const mapStateToProps = ({ jPlayers }, { uid, children, ...attributes }) => ({
  require: !jPlayers[uid].mediaSettings.video,
  children,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Audio);
