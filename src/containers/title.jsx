import { connectWithId } from '../util/index';
import Title from '../components/title';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  title: jPlayers[id].media.title,
  ...attributes,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({ ...ownProps, ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Title);
