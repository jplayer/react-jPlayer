import React from 'react';
import { connect } from 'react-redux';

import { classes } from '../../util/constants';
import { mapStateToProps } from '../../util/index';
import { mute } from '../../actions/jPlayerActions';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  muted: jPlayers[id].muted,
});

const Mute = (props) => {
  const onMuteClick = () => props.dispatch(mute(!props.muted, props.id));
  return (
    <button className={classes.MUTE} onClick={onMuteClick} {...props.attributes}>
      {props.children}
    </button>
  );
};

Mute.propTypes = {
  attributes: React.PropTypes.node,
  children: React.PropTypes.element,
  id: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  muted: React.PropTypes.bool,
};

export default connect(mapStateToProps)(jPlayerConnect(Mute, mapJPlayerProps));
