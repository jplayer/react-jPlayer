import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const CurrentTime = ({ children, ...attributes }) => (
  <div className={classes.CURRENT_TIME} {...attributes}>
    {children}
  </div>
);

CurrentTime.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CurrentTime;
