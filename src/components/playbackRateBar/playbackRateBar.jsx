import React from 'react';
import PropTypes from 'prop-types';

import Bar from '../bar';
import PlaybackRateBarValue from '../playbackRateBarValue/playbackRateBarValueContainer';
import { classes } from '../../util/constants';

const PlaybackRateBar = props => (
  <Bar
    clickMoveBar={props.clickMoveBar}
    touchMoveBar={props.touchMoveBar}
  >
    <div
      ref={props.setBar}
      className={classes.PLAYBACK_RATE_BAR}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
    >
      {props.children}
    </div>
  </Bar>
);

PlaybackRateBar.defaultProps = {
  onClick: null,
  onMouseDown: null,
  onTouchStart: null,
  setBar: null,
  children: <PlaybackRateBarValue />,
};

PlaybackRateBar.propTypes = {
  onClick: PropTypes.func,
  clickMoveBar: PropTypes.func.isRequired,
  touchMoveBar: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
  setBar: PropTypes.func,
  children: PropTypes.node,
};

export default PlaybackRateBar;
