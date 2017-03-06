import React from 'react';

import { classes } from '../../util/constants';

const VolumeBar = ({ setBar, onClick, onMouseDown,
onTouchStart, ...attributes }) => (
  <div
    {...attributes} ref={setBar} className={classes.VOLUME_BAR}
    onClick={onClick} onMouseDown={onMouseDown} onTouchStart={onTouchStart}
  />
);

VolumeBar.defaultProps = {
  onClick: null,
  setBar: null,
  onMouseDown: null,
  onTouchStart: null,
};

VolumeBar.propTypes = {
  onClick: React.PropTypes.func,
  onMouseDown: React.PropTypes.func,
  onTouchStart: React.PropTypes.func,
  setBar: React.PropTypes.func,
  children: React.PropTypes.node.isRequired,
};

export default VolumeBar;
