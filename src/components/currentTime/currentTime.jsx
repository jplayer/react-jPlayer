import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const CurrentTime = ({ currentTimeText }) => (
  <div className={classes.CURRENT_TIME}>
    {currentTimeText}
  </div>
);

CurrentTime.propTypes = {
  currentTimeText: PropTypes.string.isRequired,
};

export default CurrentTime;
