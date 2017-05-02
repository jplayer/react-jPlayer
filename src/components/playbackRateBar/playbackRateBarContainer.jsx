import React from 'react';
import PropTypes from 'prop-types';
import { connectWithId, getElementOffset } from 'react-jplayer-utils';

import { setOption } from '../../actions/actions';
import Bar from '../bar';
import PlaybackRateBar from './playbackRateBar';
import PlaybackRateBarValue from '../playbackRateBarValue/playbackRateBarValueContainer';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  movePlaybackRate: (bar, dispatch, e) => {
    const { verticalPlaybackRate, minPlaybackRate,
      maxPlaybackRate } = jPlayers[id];
    const offset = getElementOffset(bar);
    const w = bar.getBoundingClientRect().width;
    const h = bar.getBoundingClientRect().height;
    const x = e.pageX - offset.left;
    const y = (h - e.pageY) + offset.top;
    let ratio;

    if (verticalPlaybackRate) {
      ratio = y / h;
    } else {
      ratio = x / w;
    }

    const playbackRateValue = (ratio * (maxPlaybackRate - minPlaybackRate))
                              + minPlaybackRate;

    dispatch(setOption(id, 'playbackRate', playbackRateValue));
  },
  children,
  attributes,
});

const mergeProps = ({ movePlaybackRate, children, attributes }, { dispatch }) => ({
  onClick: (bar, e) => movePlaybackRate(bar, dispatch, e),
  onTouchMove: (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    movePlaybackRate(bar, dispatch, e.touches[0]);
  },
  children,
  attributes,
});

const PlaybackRateBarContainer = ({ onClick, onTouchMove, children,
attributes }) => (
  <Bar
    clickMoveBar={onClick}
    touchMoveBar={onTouchMove}
  >
    <PlaybackRateBar {...attributes}>
      {children}
    </PlaybackRateBar>
  </Bar>
);

PlaybackRateBarContainer.defaultProps = {
  children: (<PlaybackRateBarValue />),
};

PlaybackRateBarContainer.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  onTouchMove: PropTypes.func.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(PlaybackRateBarContainer);
