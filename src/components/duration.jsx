import React from 'react';

import { classes } from '../util/constants';

const Duration = ({ durationText, onClick, ...attributes }) => (
  <div {...attributes} className={classes.DURATION} onClick={onClick}>
    {durationText}
  </div>
);

Duration.defaultProps = {
  onClick: () => null,
};

Duration.propTypes = {
  onClick: React.PropTypes.func,
  durationText: React.PropTypes.string.isRequired,
};

export default Duration;
