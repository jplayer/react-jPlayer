import React from 'react';
import { Motion, spring } from 'react-motion';

import { classes } from '../util/constants';

const PlayBar = ({ currentPercentAbsolute, currentPercentRelative,
  smoothPlayBar, attributes }) => (
    <Motion style={{ smoothWidth: spring(currentPercentAbsolute, [250]) }}>
      {values => (
        <div
          {...attributes} className={classes.PLAY_BAR}
          style={{ width: smoothPlayBar ? `${values.smoothWidth}%`
                  : `${currentPercentRelative}%` }}
        />
        )
      }
    </Motion>
);

PlayBar.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  currentPercentAbsolute: React.PropTypes.number,
  currentPercentRelative: React.PropTypes.number,
  smoothPlayBar: React.PropTypes.bool,
};

export default PlayBar;
