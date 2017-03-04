import { connectWithId } from '../../util/index';
import Audio from './audio';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  require: !jPlayers[uid].mediaSettings.video,
});

export default connectWithId(mapStateToProps)(Audio);
