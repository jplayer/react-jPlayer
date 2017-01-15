import React from 'react';
import { Motion, spring } from 'react-motion';

import { classes, defaultOptions } from '../util/constants';

const PlayBar = ({ currentPercentAbsolute, currentPercentRelative,
  smoothPlayBar, ...attributes }) => (
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

PlayBar.defaultProps = {
  smoothPlayBar: defaultOptions.smoothPlayBar,
};

PlayBar.propTypes = {
  currentPercentAbsolute: React.PropTypes.number.isRequired,
  currentPercentRelative: React.PropTypes.number.isRequired,
  smoothPlayBar: React.PropTypes.bool,
};

export default PlayBar;
