import { connectWithId } from 'react-jplayer-utils';

import Video from './video';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  require: jPlayers[id].mediaSettings.video,
});

export default connectWithId(mapStateToProps)(Video);
