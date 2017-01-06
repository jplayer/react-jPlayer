import React from 'react';
import { connect } from 'react-redux';

import { classes } from '../../util/constants';
import { mapStateToProps } from '../../util/index';
import { mute, volume } from '../../actions/jPlayerActions';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  muted: jPlayers[id].muted,
});

const VolumeMax = (props) => {
  const onClick = () => {
    props.dispatch(volume(1));

    if (props.muted) {
      props.dispatch(mute(false, props.id));
    }
  };
  return (
    <button className={classes.VOLUME_MAX} onClick={onClick} {...props.attributes}>
      {props.children}
    </button>
  );
};

VolumeMax.propTypes = {
  attributes: React.PropTypes.node,
  children: React.PropTypes.element,
  id: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  muted: React.PropTypes.bool,
};

export default connect(mapStateToProps)(jPlayerConnect(VolumeMax, mapJPlayerProps));
