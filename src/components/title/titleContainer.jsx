import { connectWithId } from '../../util/index';
import Title from './title';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  title: jPlayers[id].media.title,
  artist: jPlayers[id].media.artist,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(Title);
