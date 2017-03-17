import React from 'react';

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
      {...attributes} className={classes.PLAYBACK_RATE_BAR_VALUE} style={style()}
    />
  );
};

PlaybackRateBarValue.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  verticalPlaybackRate: React.PropTypes.bool.isRequired,
  minPlaybackRate: React.PropTypes.number.isRequired,
  maxPlaybackRate: React.PropTypes.number.isRequired,
  playbackRate: React.PropTypes.number.isRequired,
};

export default PlaybackRateBarValue;
