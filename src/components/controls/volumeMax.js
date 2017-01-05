import React from 'react';
import { connect } from 'react-redux';

import { classNames } from '../../util/constants';
import { mapStateToProps } from '../../util/index';
import { mute, volume } from '../../actions/jPlayerActions';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  muted: jPlayers[id].muted,
});

const VolumeMax = (props) => {
  const onClick = (props) => {
    props.dispatch(volume(1));

    if (props.muted) {
      props.dispatch(mute(false, props.id));
    }
  };
  return <a className={classNames.VOLUME_MAX} onClick={onClick} {...props.attributes}>{props.children}</a>;
};

export default connect(mapStateToProps)(jPlayerConnect(VolumeMax, mapJPlayerProps));
