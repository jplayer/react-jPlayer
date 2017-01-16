import { connectWithId } from '../util/index';
import Poster from '../components/poster';

const mapStateToProps = ({ jPlayers }, { id, alt, ...attributes }) => ({
  src: jPlayers[id].media.poster,
  alt,
  ...attributes,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({ ...ownProps, ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Poster);
