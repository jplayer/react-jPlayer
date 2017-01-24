import React from 'react';

import { classes } from '../util/constants';

const Buffer = ({ setCanvas, ...attributes }) => (
  <canvas
    {...attributes} ref={setCanvas}
    className={classes.BUFFER_BAR}
  />
);

Buffer.defaultProps = {
  setCanvas: Function.prototype,
};

Buffer.propTypes = {
  setCanvas: React.PropTypes.func,
};

export default Buffer;
