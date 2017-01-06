import React from 'react';
import { connect } from 'react-redux';

import { classes } from '../../util/constants';
import { mapStateToProps } from '../../util/index';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
});

const PlaybackRateBarValue = (props) => {
  const style = () => {
    const ratio = (props.playbackRate - props.minPlaybackRate)
                  / (props.maxPlaybackRate - props.minPlaybackRate);
    const playbackRateBarValue = `${ratio * 100}%`;

    return {
      width: !props.verticalPlaybackRate ? playbackRateBarValue : null,
      height: props.verticalPlaybackRate ? playbackRateBarValue : null,
    };
  };
  return (
    <div
      className={classes.PLAYBACK_RATE_BAR_VALUE} style={style(props)} {...props.attributes}
    />
  );
};

PlaybackRateBarValue.propTypes = {
  attributes: React.PropTypes.node,
  verticalPlaybackRate: React.PropTypes.bool,
  minPlaybackRate: React.PropTypes.number,
  maxPlaybackRate: React.PropTypes.number,
  playbackRate: React.PropTypes.number,
};

export default connect(mapStateToProps)(jPlayerConnect(PlaybackRateBarValue, mapJPlayerProps));
