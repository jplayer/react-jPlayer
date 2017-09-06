import { connectWithId } from 'react-jplayer-utils';

import BrowserUnsupported from './browserUnsupported';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  nonSupported: jPlayers[id].mediaSettings.nonSupported,
});

export default connectWithId(mapStateToProps)(BrowserUnsupported);
