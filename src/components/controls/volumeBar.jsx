import React from 'react';

import { classes } from '../../util/constants';

const VolumeBar = ({ setVolumeBar, onClick, onMouseDown, children, ...attributes }) => (
  <div
    {...attributes} ref={setVolumeBar} className={classes.VOLUME_BAR}
    onClick={onClick} onMouseDown={onMouseDown}
  >
    {children}
  </div>
);

VolumeBar.defaultProps = {
  onMouseDown: null,
};

VolumeBar.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  onMouseDown: React.PropTypes.func,
  setVolumeBar: React.PropTypes.func.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
};

export default VolumeBar;
