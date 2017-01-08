import React from 'react';

import { classes } from '../../util/constants';

const Repeat = ({ onClick, children, attributes }) => (
  <a className={classes.REPEAT} onClick={onClick} {...attributes}>
    {children}
  </a>
);

Repeat.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  onClick: React.PropTypes.func,
};

export default Repeat;
