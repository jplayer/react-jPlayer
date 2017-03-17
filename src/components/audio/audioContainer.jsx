import { connectWithId } from '../../util/index';
import Audio from './audio';

const mapStateToProps = ({ jPlayers }, { id, events, ...attributes }) => ({
  require: !jPlayers[id].mediaSettings.video,
  events,
  attributes,
});

export default connectWithId(mapStateToProps)(Audio);
