import React from 'react';

import { classes } from '../../util/constants';

const Mute = ({ onClick, children, ...attributes }) => (
  <a {...attributes} className={classes.MUTE} onClick={onClick}>
    {children}
  </a>
);

Mute.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  onClick: React.PropTypes.func.isRequired,
};


export default Mute;
