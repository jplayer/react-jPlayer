import { connectWithId } from '../../util/index';
import Video from './video';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  require: jPlayers[id].mediaSettings.video,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(Video);
