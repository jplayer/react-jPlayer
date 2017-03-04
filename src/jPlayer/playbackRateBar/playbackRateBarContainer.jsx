import React from 'react';
import { connectWithId, getHeight, getWidth, getOffset } from '../../util/index';
import { setPlaybackRate } from '../_actions/actions';
import BarEvents from '../barEvents';
import PlaybackRateBar from './playbackRateBar';
import PlaybackRateBarValue from '../playbackRateBarValue/playbackRateBarValueContainer';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  movePlaybackRate: (bar, dispatch, e) => {
    const { verticalPlaybackRate, minPlaybackRate,
      maxPlaybackRate } = jPlayers[uid];
    const offset = getOffset(bar);
    const x = e.pageX - offset.left;
    const w = getWidth(bar);
    const y = (getHeight(bar) - e.pageY) + offset.top;
    const h = getHeight(bar);
    let ratio;

    if (verticalPlaybackRate) {
      ratio = y / h;
    } else {
      ratio = x / w;
    }

    const playbackRateValue = (ratio * (maxPlaybackRate - minPlaybackRate))
                              + minPlaybackRate;

    dispatch(setPlaybackRate(playbackRateValue, uid));
  },
});

const mergeProps = ({ movePlaybackRate }, { dispatch }) => ({
  onClick: (bar, e) => movePlaybackRate(bar, dispatch, e),
  onTouch: (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    movePlaybackRate(bar, dispatch, e.touches[0]);
  },
});

const PlaybackRateBarContainer = ({ onClick, onTouch, children, attributes }) => (
  <BarEvents
    clickMoveBar={onClick}
    touchMoveBar={onTouch}
  >
    <PlaybackRateBar attributes={attributes}>
      {children}
    </PlaybackRateBar>
  </BarEvents>
);

PlaybackRateBarContainer.defaultProps = {
  attributes: null,
  children: (<PlaybackRateBarValue />),
};

PlaybackRateBarContainer.propTypes = {
  attributes: React.PropTypes.node,
  children: React.PropTypes.node,
  onClick: React.PropTypes.func.isRequired,
  onTouch: React.PropTypes.func.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(PlaybackRateBarContainer);
