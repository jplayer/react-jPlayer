import React from 'react';

import { classes } from '../../util/constants';

const BufferBar = ({ setCanvas, attributes }) => (
  <canvas
    ref={setCanvas} className={classes.BUFFER_BAR}
    {...attributes}
  />
);

BufferBar.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  setCanvas: React.PropTypes.func.isRequired,
};

export default BufferBar;
