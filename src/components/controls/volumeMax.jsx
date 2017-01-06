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
    <a className={classes.VOLUME_MAX} onClick={onClick} {...props.attributes}>
      {props.children}
    </a>
  );
};

VolumeMax.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  id: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  muted: React.PropTypes.bool,
};

export default connect(mapStateToProps)(jPlayerConnect(VolumeMax, mapJPlayerProps));
