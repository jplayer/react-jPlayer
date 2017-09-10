import React from 'react';
import PropTypes from 'prop-types';

import Bar from '../barContainer';
import VolumeBarValue from '../volumeBarValue/volumeBarValueContainer';
import { classes } from '../../util/constants';

const VolumeBar = props => (
  <Bar
    clickMoveBar={props.clickMoveBar}
    touchMoveBar={props.touchMoveBar}
  >
    <div className={classes.VOLUME_BAR}>
      {props.children}
    </div>
  </Bar>
);

VolumeBar.defaultProps = {
  children: <VolumeBarValue />,
};

VolumeBar.propTypes = {
  clickMoveBar: PropTypes.func.isRequired,
  touchMoveBar: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default VolumeBar;
