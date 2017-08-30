import React from 'react';
import PropTypes from 'prop-types';

import Bar from '../barContainer';
import PlaybackRateBarValue from '../playbackRateBarValue/playbackRateBarValueContainer';
import { classes } from '../../util/constants';

const PlaybackRateBar = props => (
  <Bar
    clickMoveBar={props.clickMoveBar}
    touchMoveBar={props.touchMoveBar}
  >
    <div className={classes.PLAYBACK_RATE_BAR}>
      {props.children}
    </div>
  </Bar>
);

PlaybackRateBar.defaultProps = {
  children: <PlaybackRateBarValue />,
};

PlaybackRateBar.propTypes = {
  clickMoveBar: PropTypes.func.isRequired,
  touchMoveBar: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default PlaybackRateBar;
