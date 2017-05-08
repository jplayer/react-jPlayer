import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const PlayBar = ({ currentPercentAbsolute, currentPercentRelative,
  smoothPlayBar, ...attributes }) => (
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
  currentPercentRelative: PropTypes.number.isRequired,
  currentPercentAbsolute: PropTypes.number.isRequired,
  smoothPlayBar: PropTypes.bool.isRequired,
};

export default PlayBar;
