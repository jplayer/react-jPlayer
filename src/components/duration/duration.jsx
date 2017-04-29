import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Duration = ({ children, attributes }) => (
  children !== '' ?
    <div className={classes.DURATION} {...attributes}>
      {children}
    </div>
  : null
);

Duration.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

export default Duration;
