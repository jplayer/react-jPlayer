import { connectWithId } from '../../util/index';
import BrowserUnsupported from './browserUnsupported';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  foundSupported: jPlayers[uid].mediaSettings.foundSupported,
});

export default connectWithId(mapStateToProps)(BrowserUnsupported);
