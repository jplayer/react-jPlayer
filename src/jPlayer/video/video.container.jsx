import { connectWithId } from '../../util/index';
import Video from './video';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  require: jPlayers[uid].mediaSettings.video,
});

export default connectWithId(mapStateToProps)(Video);
