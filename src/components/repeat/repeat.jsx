import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Repeat = ({ onClick, id, loop, children, attributes }) => (
  <button className={classes.REPEAT} onClick={() => onClick(id, loop)} {...attributes}>
    {children}
  </button>
);

Repeat.propTypes = {
  loop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Repeat;
