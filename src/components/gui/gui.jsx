import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Gui = ({ opacity, children, onMouseMove }) => (
  <div
    className={classes.GUI}
    onMouseMove={onMouseMove}
    style={{ opacity }}
  >
    {children}
  </div>
);

Gui.propTypes = {
  opacity: PropTypes.number.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Gui;
