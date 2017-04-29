import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const BufferBar = ({ setCanvas, attributes }) => (
  <canvas
    ref={setCanvas} className={classes.BUFFER_BAR}
    {...attributes}
  />
);

BufferBar.propTypes = {
  attributes: PropTypes.object.isRequired,
  setCanvas: PropTypes.func.isRequired,
};

export default BufferBar;
