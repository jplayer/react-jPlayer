import { connectWithId } from '../../util/index';
import Title from './title';

const mapStateToProps = ({ jPlayers }, { children, id, ...attributes }) => ({
  title: jPlayers[id].media.title,
  artist: jPlayers[id].media.artist,
  children,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Title);
