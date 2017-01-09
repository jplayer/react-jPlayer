import { connectWithId } from '../util/index';
import { playHead } from '../actions/jPlayerActions';
import SeekBar from '../components/seekBar';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  seekPercent: jPlayers[id].seekPercent,
  barDrag: jPlayers[id].barDrag,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  playHead: percentage => dispatch(playHead(percentage, id)),
  ...stateProps,
});

export default connectWithId(mapStateToProps, null, mergeProps)(SeekBar);
