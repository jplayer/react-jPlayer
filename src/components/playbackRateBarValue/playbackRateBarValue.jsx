import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const PlaybackRateBarValue = (props) => {
  const ratio = (props.playbackRate - props.minPlaybackRate)
    / (props.maxPlaybackRate - props.minPlaybackRate);
  const playbackRateBarPercentage = `${ratio * 100}%`;
  const style = {
    width: !props.verticalPlaybackRate ? playbackRateBarPercentage : null,
    height: props.verticalPlaybackRate ? playbackRateBarPercentage : null,
  };

  return (
    <div
      className={classes.PLAYBACK_RATE_BAR_VALUE}
      style={style}
    />
  );
};

PlaybackRateBarValue.propTypes = {
  verticalPlaybackRate: PropTypes.bool.isRequired,
  minPlaybackRate: PropTypes.number.isRequired,
  maxPlaybackRate: PropTypes.number.isRequired,
  playbackRate: PropTypes.number.isRequired,
};

export default PlaybackRateBarValue;
