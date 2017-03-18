import React from 'react';
import { Motion, spring } from 'react-motion';

import { classes } from '../../util/constants';

const PlayBar = ({ currentPercentAbsolute, currentPercentRelative,
  smoothPlayBar, attributes }) => (
    <Motion style={{ smoothWidth: spring(currentPercentAbsolute, [250]) }}>
      {values => (
        <div
          className={classes.PLAY_BAR}
          style={{ width: smoothPlayBar ? `${values.smoothWidth}%`
                  : `${currentPercentRelative}%` }}
          {...attributes}
        />
        )
      }
    </Motion>
);

PlayBar.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  currentPercentRelative: React.PropTypes.number.isRequired,
  currentPercentAbsolute: React.PropTypes.number.isRequired,
  smoothPlayBar: React.PropTypes.bool.isRequired,
};

export default PlayBar;
