import { connectWithId } from 'react-jplayer-utils';
import Audio from './audio';

const mapStateToProps = ({ jPlayers }, { id, events, children, ...attributes }) => ({
  require: !jPlayers[id].mediaSettings.video,
  events,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(Audio);
