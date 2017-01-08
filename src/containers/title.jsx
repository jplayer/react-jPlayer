import { connectWithId } from '../util/index';
import Title from '../components/title';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  title: jPlayers[id].media.title,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(Title);
