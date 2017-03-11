import { connectWithId } from '../../util/index';
import Poster from './poster';

const mapStateToProps = ({ jPlayers }, { uid, ...attributes }) => ({
  src: jPlayers[uid].media.poster,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Poster);
