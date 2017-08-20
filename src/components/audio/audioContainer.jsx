import { connectWithId } from 'react-jplayer-utils';

import Audio from './audio';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  require: !jPlayers[id].mediaSettings.video,
});

export default connectWithId(mapStateToProps)(Audio);
