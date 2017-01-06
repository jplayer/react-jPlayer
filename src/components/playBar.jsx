import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';

import { classes } from '../util/constants';
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
    {values => (
      <div
        className={classes.PLAY_BAR}
        style={{ width: props.smoothPlayBar ? `${values.smoothWidth}%`
                : `${props.currentPercentRelative}%` }} {...props.attributes}
      />
      )
    }
  </Motion>
);

PlayBar.propTypes = {
  attributes: React.PropTypes.node,
  currentPercentAbsolute: React.PropTypes.number,
  currentPercentRelative: React.PropTypes.number,
  smoothPlayBar: React.PropTypes.bool,
};

export default connect(mapStateToProps)(jPlayerConnect(PlayBar, mapJPlayerProps));
