import React from 'react';
import PropTypes from 'prop-types';

import { classes, defaultOptions } from '../../util/constants';

const VolumeBarValue = ({ muted, volume, verticalVolume, attributes }) => {
  const style = () => {
    const volumeBarValuePercentage = `${muted ? 0 : (volume * 100)}%`;

    return {
      width: !verticalVolume ? volumeBarValuePercentage : null,
      height: verticalVolume ? volumeBarValuePercentage : null,
    };
  };
  return <div className={classes.VOLUME_BAR_VALUE} style={style()} {...attributes} />;
};

VolumeBarValue.defaultProps = {
  verticalVolume: defaultOptions.verticalVolume,
};

VolumeBarValue.propTypes = {
  attributes: PropTypes.object.isRequired,
  muted: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  verticalVolume: PropTypes.bool,
};

export default VolumeBarValue;
