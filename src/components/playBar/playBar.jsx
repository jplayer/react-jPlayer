import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const PlayBar = (props) => {
  const width = props.smoothPlayBar ? `${props.smoothWidth}%`
    : `${props.currentPercentRelative}%`;

  return (
    <div
      className={classes.PLAY_BAR}
      style={{ width }}
    />
  );
};

PlayBar.propTypes = {
  smoothPlayBar: PropTypes.bool.isRequired,
  smoothWidth: PropTypes.number.isRequired,
  currentPercentRelative: PropTypes.number.isRequired,
};

export default PlayBar;
