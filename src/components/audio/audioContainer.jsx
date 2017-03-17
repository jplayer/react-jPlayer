import { connectWithId } from '../../util/index';
import Audio from './audio';

const mapStateToProps = ({ jPlayers }, { id, events, children, ...attributes }) => ({
  require: !jPlayers[id].mediaSettings.video,
  events,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(Audio);
