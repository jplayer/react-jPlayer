import React from 'react';

import { classes } from '../../util/constants';

const VolumeMax = ({ onClick, children, ...attributes }) => (
  <a {...attributes} className={classes.VOLUME_MAX} onClick={onClick}>
    {children}
  </a>
);

VolumeMax.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default VolumeMax;
