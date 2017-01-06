import React from 'react';
import { connect } from 'react-redux';

import { classes } from '../util/constants';
import { duration } from '../actions/jPlayerActions';
import { mapStateToProps } from '../util/index';
import jPlayerConnect from '../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  toggleDuration: jPlayers[id].toggleDuration,
  captureDuration: jPlayers[id].captureDuration,
  durationText: jPlayers[id].durationText,
});

const Duration = (props) => {
  const onDurationClick = (e) => {
    if (props.toggleDuration) {
      if (props.captureDuration) {
        e.stopPropagation();
      }
      props.dispatch(duration(props.id));
    }
  };
  return (
    <button className={classes.DURATION} onClick={onDurationClick} {...props.attributes}>
      {props.durationText}
    </button>
  );
};

Duration.propTypes = {
  attributes: React.PropTypes.node,
  toggleDuration: React.PropTypes.bool,
  captureDuration: React.PropTypes.bool,
  dispatch: React.PropTypes.func,
  id: React.PropTypes.string,
  durationText: React.PropTypes.string,
};

export default connect(mapStateToProps)(jPlayerConnect(Duration, mapJPlayerProps));
