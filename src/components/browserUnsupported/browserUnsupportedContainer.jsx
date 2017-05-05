import { connectWithId } from 'react-jplayer-utils';
import BrowserUnsupported from './browserUnsupported';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  foundSupported: jPlayers[id].mediaSettings.foundSupported,
});

export default connectWithId(mapStateToProps, {})(BrowserUnsupported);
