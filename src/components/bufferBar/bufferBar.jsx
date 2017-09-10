import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const BufferBar = ({ setCanvas }) => (
  <canvas
    ref={setCanvas}
    className={classes.BUFFER_BAR}
  />
);

BufferBar.propTypes = {
  setCanvas: PropTypes.func.isRequired,
};

export default BufferBar;
