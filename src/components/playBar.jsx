import React from 'react';
import { Motion, spring } from 'react-motion';

import { classes, defaultOptions, statusDefaultValues } from '../util/constants';

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
  currentPercentAbsolute: statusDefaultValues.currentPercentAbsolute,
};

PlayBar.propTypes = {
  currentPercentRelative: React.PropTypes.number.isRequired,
  currentPercentAbsolute: React.PropTypes.number,
  smoothPlayBar: React.PropTypes.bool,
};

export default PlayBar;
