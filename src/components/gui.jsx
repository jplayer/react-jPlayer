import React from 'react';
import { classes } from '../util/constants';

const Gui = ({ children, attributes }) => (
  <div {...attributes} className={classes.GUI}>
    {children}
  </div>
);

Gui.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
};

export default Gui;
