import { connectWithId } from '../../util/index';
import Title from './title';

const mapStateToProps = ({ jPlayers }, { children, uid }) => ({
  children: children || jPlayers[uid].media.title,
});

export default connectWithId(mapStateToProps)(Title);
