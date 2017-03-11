import { connectWithId } from '../../util/index';
import Title from './title';

const mapStateToProps = ({ jPlayers }, { children, id, ...attributes }) => ({
  children: children || jPlayers[id].media.title,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Title);
