import React from 'react';

import { classes } from '../util/constants';

const Duration = ({ durationText, onClick, attributes }) => (
  <div {...attributes} className={classes.DURATION} onClick={onClick}>
    {durationText}
  </div>
);

Duration.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  onClick: React.PropTypes.func,
  durationText: React.PropTypes.string,
};

export default Duration;
