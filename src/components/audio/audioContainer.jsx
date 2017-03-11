import { connectWithId } from '../../util/index';
import Audio from './audio';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  require: !jPlayers[id].mediaSettings.video,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Audio);
