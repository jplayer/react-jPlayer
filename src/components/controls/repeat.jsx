import React from 'react';

import { classes } from '../../util/constants';

const Repeat = ({ onClick, children, ...attributes }) => (
  <a {...attributes} className={classes.REPEAT} onClick={onClick}>
    {children}
  </a>
);

Repeat.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Repeat;
