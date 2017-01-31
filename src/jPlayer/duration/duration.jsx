import React from 'react';

import { classes } from '../../util/constants';

const Duration = ({ ...attributes }) => (
  <div {...attributes} className={classes.DURATION} />
);

Duration.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
};

export default Duration;
