import { connectWithId } from '../util/index';
import { setPlayHead } from '../actions/jPlayerActions';
import SeekBar from '../components/seekBar';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  seekPercent: jPlayers[id].seekPercent,
  barDrag: jPlayers[id].barDrag,
  children,
  ...attributes,
});

const mapDispatchToProps = ({ dispatch }, { id }) => ({
  playHead: percentage => dispatch(setPlayHead(percentage, id)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(SeekBar);
