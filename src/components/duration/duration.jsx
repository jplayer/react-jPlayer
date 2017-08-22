import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Duration = ({ durationText }) => (
  <div className={classes.DURATION}>
    {durationText}
  </div>
);

Duration.propTypes = {
  durationText: PropTypes.string.isRequired,
};

export default Duration;
