import React from 'react';
import { connect } from 'react-redux';

import { classes } from '../../util/constants';
import { mapStateToProps } from '../../util/index';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  verticalVolume: jPlayers[id].verticalVolume,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
});



const VolumeBarValue = (props) => {
  const style = () => {
    const volumeBarValuePercentage = `${props.muted ? 0 : (props.volume * 100)}%`;

    return {
      width: !props.verticalVolume ? volumeBarValuePercentage : null,
      height: props.verticalVolume ? volumeBarValuePercentage : null,
    };
  };
  return <div className={classes.VOLUME_BAR_VALUE} style={style()} {...props.attributes} />;
};

VolumeBarValue.propTypes = {
  attributes: React.PropTypes.node,
  muted: React.PropTypes.bool,
  volume: React.PropTypes.number,
  verticalVolume: React.PropTypes.bool,
};

export default connect(mapStateToProps)(jPlayerConnect(VolumeBarValue, mapJPlayerProps));
