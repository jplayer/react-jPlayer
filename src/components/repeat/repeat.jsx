import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Repeat = ({ loop, children }) => (
  <button className={classes.REPEAT} onClick={loop}>
    {children}
  </button>
);

Repeat.propTypes = {
  children: PropTypes.node.isRequired,
  loop: PropTypes.func.isRequired,
};

export default Repeat;
