import React from 'react';
import { classes } from '../util/constants';

const Gui = ({ children, ...attributes }) => (
  <div className={classes.GUI} {...attributes}>
    {children}
  </div>
);

Gui.propTypes = {
  children: React.PropTypes.element,
};

export default Gui;
