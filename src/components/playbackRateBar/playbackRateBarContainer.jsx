import { connectWithId, getElementOffset } from 'react-jplayer-utils';
import { compose, withHandlers } from 'recompose';

import { setOption } from '../../actions/actions';
import PlaybackRateBar from './playbackRateBar';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
});

const handlers = {
  movePlaybackRate: props => (bar, e) => {
    const offset = getElementOffset(bar);
    const w = bar.getBoundingClientRect().width;
    const h = bar.getBoundingClientRect().height;
    const x = e.pageX - offset.left;
    const y = (h - e.pageY) + offset.top;
    let ratio;

    if (props.verticalPlaybackRate) {
      ratio = y / h;
    } else {
      ratio = x / w;
    }

    const playbackRateValue = (ratio * (props.maxPlaybackRate - props.minPlaybackRate))
      + props.minPlaybackRate;

    props.dispatch(setOption(props.id, 'playbackRate', playbackRateValue));
  },
};

const secondHandlers = {
  clickMoveBar: props => (bar, e) => props.movePlaybackRate(bar, e),
  touchMoveBar: props => (bar, e) => {
    e.preventDefault();

    props.movePlaybackRate(bar, e);
  },
};

export default compose(
  connectWithId(mapStateToProps),
  withHandlers(handlers),
  withHandlers(secondHandlers),
)(PlaybackRateBar);
