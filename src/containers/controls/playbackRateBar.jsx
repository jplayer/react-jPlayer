import { connectWithId, getWidth, getHeight, getOffset } from '../../util/index';
import { playbackRate } from '../../actions/jPlayerActions';
import PlaybackRateBar from '../../components/controls/playbackRateBar';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  barDrag: jPlayers[id].barDrag,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => {
  let dragging = false;
  let playbackRateBar;

  const movePlaybackRate = (e) => {
    const offset = getOffset(playbackRateBar);
    const x = e.pageX - offset.left;
    const w = getWidth(playbackRateBar);
    const y = (getHeight(playbackRateBar) - e.pageY) + offset.top;
    const h = getHeight(playbackRateBar);
    let ratio;

    if (stateProps.verticalPlaybackRate) {
      ratio = y / h;
    } else {
      ratio = x / w;
    }

    const playbackRateValue = (ratio * (stateProps.maxPlaybackRate - stateProps.minPlaybackRate))
                              + stateProps.minPlaybackRate;

    dispatch(playbackRate(playbackRateValue, id));
  };

  return {
    onClick: e => movePlaybackRate(e),
    onMouseMove: e => (stateProps.barDrag && dragging ? movePlaybackRate(e) : null),
    onMouseDown: () => {
      dragging = true;
    },
    onMouseUp: () => {
      dragging = false;
    },
    setPlaybackRateBar: (ref) => {
      playbackRateBar = ref;
    },
    children: stateProps.children,
    attributes: stateProps.attributes,
  };
};

export default connectWithId(mapStateToProps, null, mergeProps)(PlaybackRateBar);
