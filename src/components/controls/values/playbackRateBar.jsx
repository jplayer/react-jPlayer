import React from 'react';

import { classes } from '../../../util/constants';

const PlaybackRateBarValue = ({ playbackRate, minPlaybackRate, maxPlaybackRate,
    verticalPlaybackRate, attributes }) => {
  const style = () => {
    const ratio = (playbackRate - minPlaybackRate)
                  / (maxPlaybackRate - minPlaybackRate);
    const playbackRateBarValue = `${ratio * 100}%`;

    return {
      width: !verticalPlaybackRate ? playbackRateBarValue : null,
      height: verticalPlaybackRate ? playbackRateBarValue : null,
    };
  };
  return (
    <div
      {...attributes} className={classes.PLAYBACK_RATE_BAR_VALUE} style={style()}
    />
  );
};

PlaybackRateBarValue.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  verticalPlaybackRate: React.PropTypes.bool,
  minPlaybackRate: React.PropTypes.number,
  maxPlaybackRate: React.PropTypes.number,
  playbackRate: React.PropTypes.number,
};

export default PlaybackRateBarValue;
