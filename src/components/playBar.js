import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';

import { classNames } from '../util/constants';
import { mapStateToProps } from '../util/index';
import jPlayerConnect from '../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  smoothPlayBar: jPlayers[id].smoothPlayBar,
  currentPercentAbsolute: jPlayers[id].currentPercentAbsolute,
  currentPercentRelative: jPlayers[id].currentPercentRelative,
  currentTime: jPlayers[id].currentTime,
  duration: jPlayers[id].duration,
  playHeadPercent: jPlayers[id].playHeadPercent,
});

const PlayBar = props => (
  <Motion style={{ smoothWidth: spring(props.currentPercentAbsolute, [250]) }}>
    {values => <div className={classNames.PLAY_BAR} style={{ width: props.smoothPlayBar ? `${values.smoothWidth}%` : `${props.currentPercentRelative}%` }} {...props.attributes} />}
  </Motion>
);

export default connect(mapStateToProps)(jPlayerConnect(PlayBar, mapJPlayerProps));
