import { connectWithId } from '../../util/index';
import BrowserUnsupported from './browserUnsupported';

const mapStateToProps = ({ jPlayers }, { uid, children }) => ({
  foundSupported: jPlayers[uid].mediaSettings.foundSupported,
  children,
});

export default connectWithId(mapStateToProps)(BrowserUnsupported);
