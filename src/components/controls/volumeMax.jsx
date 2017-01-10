import React from 'react';

import { classes } from '../../util/constants';

const VolumeMax = ({ onClick, children, attributes }) => (
  <a {...attributes} className={classes.VOLUME_MAX} onClick={onClick}>
    {children}
  </a>
);

VolumeMax.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  onClick: React.PropTypes.func,
};

export default VolumeMax;
