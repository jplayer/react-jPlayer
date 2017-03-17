import React from 'react';

import { classes } from '../../util/constants';

const BufferBar = ({ setCanvas, attributes }) => (
  <canvas
    {...attributes} ref={setCanvas}
    className={classes.BUFFER_BAR}
  />
);

BufferBar.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  setCanvas: React.PropTypes.func.isRequired,
};

export default BufferBar;
