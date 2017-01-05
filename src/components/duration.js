import React from 'react';
import { connect } from 'react-redux';

import { classNames } from '../util/constants';
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
  return <div className={classNames.DURATION} onClick={onDurationClick} {...props.attributes}>{props.durationText}</div>;
};

export default connect(mapStateToProps)(jPlayerConnect(Duration, mapJPlayerProps));
