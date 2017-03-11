import { connectWithId } from '../../util/index';
import BrowserUnsupported from './browserUnsupported';

const mapStateToProps = ({ jPlayers }, { id, children }) => ({
  foundSupported: jPlayers[id].mediaSettings.foundSupported,
  children,
});

export default connectWithId(mapStateToProps)(BrowserUnsupported);
