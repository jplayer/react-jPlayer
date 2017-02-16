import React from 'react';
import { connectWithId, getHeight, getWidth, getOffset } from '../../util/index';
import { setPlaybackRate } from '../_actions/actions';
import BarEvents from '../barEvents';
import PlaybackRateBar from './playbackRateBar';
import PlaybackRateBarValue from '../playbackRateBarValue/playbackRateBarValue.container';

const mapStateToProps = ({ jPlayers }, { uid }) => {
  const { verticalPlaybackRate, minPlaybackRate, maxPlaybackRate }
   = jPlayers[uid];

  return {
    verticalPlaybackRate,
    minPlaybackRate,
    maxPlaybackRate,
    movePlaybackRate: (bar, dispatch, e) => {
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
  };
};

const mergeProps = ({ verticalPlaybackRate, minPlaybackRate, maxPlaybackRate, movePlaybackRate },
// eslint-disable-next-line no-unused-vars
{ dispatch }, { uid, ...attributes }) => ({
  touchMovePlaybackRate: (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    movePlaybackRate(bar, dispatch, e.touches[0]);
  },
  clickMovePlaybackRate: (bar, e) => movePlaybackRate(bar, dispatch, e),
  ...attributes,
});

const PlaybackRateBarContainer =
({ clickMovePlaybackRate, touchMovePlaybackRate, ...attributes }) => (
  <BarEvents clickMoveBar={clickMovePlaybackRate} touchMoveBar={touchMovePlaybackRate}>
    <PlaybackRateBar {...attributes} />
  </BarEvents>
);

PlaybackRateBarContainer.defaultProps = {
  children: (<PlaybackRateBarValue />),
};

PlaybackRateBarContainer.propTypes = {
  clickMovePlaybackRate: React.PropTypes.func.isRequired,
  touchMovePlaybackRate: React.PropTypes.func.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(PlaybackRateBarContainer);
