import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const PlaybackRateBarValue = ({ playbackRate, minPlaybackRate, maxPlaybackRate,
    verticalPlaybackRate, attributes }) => {
  const style = () => {
    const ratio = (playbackRate - minPlaybackRate)
                  / (maxPlaybackRate - minPlaybackRate);
    const playbackRateBarPercentage = `${ratio * 100}%`;

    return {
      width: !verticalPlaybackRate ? playbackRateBarPercentage : null,
      height: verticalPlaybackRate ? playbackRateBarPercentage : null,
    };
  };
  return (
    <div
      className={classes.PLAYBACK_RATE_BAR_VALUE} style={style()}
      {...attributes}
    />
  );
};

PlaybackRateBarValue.propTypes = {
  attributes: PropTypes.object.isRequired,
  verticalPlaybackRate: PropTypes.bool.isRequired,
  minPlaybackRate: PropTypes.number.isRequired,
  maxPlaybackRate: PropTypes.number.isRequired,
  playbackRate: PropTypes.number.isRequired,
};

export default PlaybackRateBarValue;
