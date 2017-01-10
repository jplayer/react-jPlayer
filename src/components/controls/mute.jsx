import React from 'react';

import { classes } from '../../util/constants';

const Mute = ({ onClick, children, attributes }) => (
  <a {...attributes} className={classes.MUTE} onClick={onClick}>
    {children}
  </a>
);

Mute.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  onClick: React.PropTypes.func,
};


export default Mute;
