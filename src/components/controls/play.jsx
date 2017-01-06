import React from 'react';
import { connect } from 'react-redux';

import { classes } from '../../util/constants';
import { mapStateToProps } from '../../util/index';
import { play, pause } from '../../actions/jPlayerActions';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  paused: jPlayers[id].paused,
});

const Play = (props) => {
  const onPlayClick = () => (
    props.paused ? props.dispatch(play(props.id)) : props.dispatch(pause(props.id))
  );
  return (
    <a className={classes.PLAY} onClick={onPlayClick} {...props.attributes}>
      {props.children}
    </a>
  );
};

Play.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  id: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  paused: React.PropTypes.bool,
};

export default connect(mapStateToProps)(jPlayerConnect(Play, mapJPlayerProps));
