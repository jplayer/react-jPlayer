import React from 'react';
import { connect } from 'react-redux';

import { keys, classNames } from '../../util/constants';
import { mapStateToProps } from '../../util/index';
import { mute, volume } from '../../actions/jPlayerActions';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  verticalVolume: jPlayers[id].verticalVolume,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
});

const VolumeBarValue = props => <div className={classNames.VOLUME_BAR_VALUE} style={style(props)} {...props.attributes} />;

const style = (props) => {
  const volumeBarValuePercentage = `${props.muted ? 0 : (props.volume * 100)}%`;

  return {
    width: !props.verticalVolume ? volumeBarValuePercentage : null,
    height: props.verticalVolume ? volumeBarValuePercentage : null,
  };
};

export default connect(mapStateToProps)(jPlayerConnect(VolumeBarValue, mapJPlayerProps));
