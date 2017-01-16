import React from 'react';

import { classes } from '../../util/constants';
import VolumeBarValue from '../../components/controls/volumeBarValue';

const VolumeBar = ({ setVolumeBar, onClick, onMouseDown, children, ...attributes }) => (
  <div
    {...attributes} ref={setVolumeBar} className={classes.VOLUME_BAR}
    onClick={onClick} onMouseDown={onMouseDown}
  >
    {children}
  </div>
);

VolumeBar.defaultProps = {
  onMouseDown: () => null,
  children: (<VolumeBarValue />),
};

VolumeBar.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  onMouseDown: React.PropTypes.func,
  setVolumeBar: React.PropTypes.func.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
};

export default VolumeBar;
