import React from 'react';

import { classes, defaultOptions } from '../../util/constants';

const PlaybackRateBarValue = ({ playbackRate, minPlaybackRate, maxPlaybackRate,
    verticalPlaybackRate, ...attributes }) => {
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
      {...attributes} className={classes.PLAYBACK_RATE_BAR_VALUE} style={style()}
    />
  );
};

PlaybackRateBarValue.defaultProps = {
  verticalPlaybackRate: defaultOptions.verticalPlaybackRate,
  minPlaybackRate: defaultOptions.minPlaybackRate,
  maxPlaybackRate: defaultOptions.maxPlaybackRate,
};

PlaybackRateBarValue.propTypes = {
  verticalPlaybackRate: React.PropTypes.bool,
  minPlaybackRate: React.PropTypes.number,
  maxPlaybackRate: React.PropTypes.number,
  playbackRate: React.PropTypes.number.isRequired,
};

export default PlaybackRateBarValue;
