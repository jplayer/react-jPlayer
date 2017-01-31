import React from 'react';

import { classes } from '../../util/constants';

const VolumeMax = ({ onClick, ...attributes }) =>
  <button {...attributes} className={classes.VOLUME_MAX} onClick={onClick} />;

VolumeMax.propTypes = {
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default VolumeMax;
