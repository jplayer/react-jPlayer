import { connectWithId } from '../../util/index';
import Title from './title';

const mapStateToProps = ({ jPlayers }, { uid, ...attributes }) => ({
  children: jPlayers[uid].media.title,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(Title);
