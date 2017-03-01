import React from 'react';

import { classes, defaultOptions } from '../../util/constants';

const VolumeBarValue = ({ muted, volume, verticalVolume, attributes }) => {
  const style = () => {
    const volumeBarValuePercentage = `${muted ? 0 : (volume * 100)}%`;

    return {
      width: !verticalVolume ? volumeBarValuePercentage : null,
      height: verticalVolume ? volumeBarValuePercentage : null,
    };
  };
  return <div {...attributes} className={classes.VOLUME_BAR_VALUE} style={style()} />;
};

VolumeBarValue.defaultProps = {
  attributes: null,
  verticalVolume: defaultOptions.verticalVolume,
};

VolumeBarValue.propTypes = {
  attributes: React.PropTypes.node,
  muted: React.PropTypes.bool.isRequired,
  volume: React.PropTypes.number.isRequired,
  verticalVolume: React.PropTypes.bool,
};

export default VolumeBarValue;
