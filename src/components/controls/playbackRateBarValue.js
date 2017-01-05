import React from 'react';
import { connect } from 'react-redux';

import { keys, classNames } from '../../util/constants';
import { mapStateToProps } from '../../util/index';
import { playbackRate } from '../../actions/jPlayerActions';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  playbackRateEnabled: jPlayers[id].playbackRateEnabled,
});

const PlaybackRateBarValue = props => <div className={classNames.PLAYBACK_RATE_BAR_VALUE} style={style(props)} {...props.attributes} />;

const style = (props) => {
  const ratio = (props.playbackRate - props.minPlaybackRate) / (props.maxPlaybackRate - props.minPlaybackRate);
  const playbackRateBarValue = `${ratio * 100}%`;

  return {
    width: !props.verticalPlaybackRate ? playbackRateBarValue : null,
    height: props.verticalPlaybackRate ? playbackRateBarValue : null,
  };
};

export default connect(mapStateToProps)(jPlayerConnect(PlaybackRateBarValue, mapJPlayerProps));
