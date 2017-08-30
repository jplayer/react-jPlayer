import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Title = ({ title }) => (
  <div className={classes.TITLE}>
    {title}
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
