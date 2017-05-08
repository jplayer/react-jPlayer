import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Title = ({ children, attributes }) => (
  children !== '' ?
    <div className={classes.TITLE} {...attributes}>
      {children}
    </div>
  : null
);

Title.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Title;
