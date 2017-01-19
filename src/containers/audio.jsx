import { connectWithId } from '../util/index';
import Audio from '../components/audio';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  require: !jPlayers[id].mediaSettings.video,
  children,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Audio);
