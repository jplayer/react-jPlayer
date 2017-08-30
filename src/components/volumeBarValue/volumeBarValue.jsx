import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const VolumeBarValue = ({ muted, volume, verticalVolume }) => {
  const volumeBarValuePercentage = `${muted ? 0 : (volume * 100)}%`;
  const style = {
    width: !verticalVolume ? volumeBarValuePercentage : null,
    height: verticalVolume ? volumeBarValuePercentage : null,
  };

  return <div className={classes.VOLUME_BAR_VALUE} style={style} />;
};

VolumeBarValue.propTypes = {
  muted: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  verticalVolume: PropTypes.bool.isRequired,
};

export default VolumeBarValue;
