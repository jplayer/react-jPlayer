import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const VolumeBar = ({ setBar, onClick, onMouseDown,
onTouchStart, ...attributes }) => (
  <div
    ref={setBar} className={classes.VOLUME_BAR}
    onClick={onClick} onMouseDown={onMouseDown} onTouchStart={onTouchStart}
    {...attributes}
  />
);

VolumeBar.defaultProps = {
  onClick: null,
  setBar: null,
  onMouseDown: null,
  onTouchStart: null,
};

VolumeBar.propTypes = {
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
  setBar: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default VolumeBar;
