import { connectWithId } from 'react-jplayer-utils';
import BrowserUnsupported from './browserUnsupported';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  foundSupported: jPlayers[id].mediaSettings.foundSupported,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(BrowserUnsupported);
