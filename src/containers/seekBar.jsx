import { connectWithId, getWidth, getOffset } from '../util/index';
import { playHead } from '../actions/jPlayerActions';
import SeekBar from '../components/seekBar';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  seekPercent: jPlayers[id].seekPercent,
  seeking: jPlayers[id].seeking,
  remaining: jPlayers[id].remaining,
  media: jPlayers[id].media,
  currentPercentAbsolute: jPlayers[id].currentPercentAbsolute,
  currentPercentRelative: jPlayers[id].currentPercentRelative,
  smoothPlayBar: jPlayers[id].smoothPlayBar,
  playHeadPercent: jPlayers[id].playHeadPercent,
  barDrag: jPlayers[id].barDrag,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => {
  let dragging = false;
  let seekBar;

  const movePlayHead = (e) => {
    const offset = getOffset(seekBar);
    const x = e.pageX - offset.left;
    const w = getWidth(seekBar);
    const percentage = 100 * (x / w);

    dispatch(playHead(percentage, id));
  };

  return {
    onClick: e => movePlayHead(e),
    onMouseMove: e => (stateProps.barDrag && dragging ? movePlayHead(e) : null),
    onMouseDown: () => {
      dragging = true;
    },
    onMouseUp: () => {
      dragging = false;
    },
    setSeekBar: (ref) => {
      seekBar = ref;
    },
    children: stateProps.children,
    attributes: stateProps.attributes,
  };
};

export default connectWithId(mapStateToProps, null, mergeProps)(SeekBar);
