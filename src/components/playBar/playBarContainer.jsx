import { connectWithId } from '../../util/index';
import PlayBar from './playBar';

const mapStateToProps = ({ jPlayers }, { uid, ...attributes }) => ({
  smoothPlayBar: jPlayers[uid].smoothPlayBar,
  currentPercentAbsolute: jPlayers[uid].currentPercentAbsolute,
  currentPercentRelative: jPlayers[uid].currentPercentRelative,
  ...attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(PlayBar);
