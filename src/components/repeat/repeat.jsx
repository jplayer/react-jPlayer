import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Repeat = ({ setLoop, id, loop, children }) => (
  <button className={classes.REPEAT} onClick={() => setLoop(id, !loop)}>
    {children}
  </button>
);

Repeat.propTypes = {
  loop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  setLoop: PropTypes.func.isRequired,
};

export default Repeat;
