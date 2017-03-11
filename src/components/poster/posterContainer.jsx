import { connectWithId } from '../../util/index';
import Poster from './poster';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  src: jPlayers[id].media.poster,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Poster);
