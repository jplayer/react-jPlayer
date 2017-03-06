import React from 'react';
import { Motion, spring } from 'react-motion';

import { classes } from '../../util/constants';

const PlayBar = ({ currentPercentAbsolute, currentPercentRelative,
  smoothPlayBar, children, ...attributes }) => (
    <Motion style={{ smoothWidth: spring(currentPercentAbsolute, [250]) }}>
      {values => (
        <div
          {...attributes} className={classes.PLAY_BAR}
          style={{ width: smoothPlayBar ? `${values.smoothWidth}%`
                  : `${currentPercentRelative}%` }}
        >
          {children}
        </div>
        )
      }
    </Motion>
);

PlayBar.propTypes = {
  children: React.PropTypes.node.isRequired,
  currentPercentRelative: React.PropTypes.number.isRequired,
  currentPercentAbsolute: React.PropTypes.number.isRequired,
  smoothPlayBar: React.PropTypes.bool.isRequired,
};

export default PlayBar;
