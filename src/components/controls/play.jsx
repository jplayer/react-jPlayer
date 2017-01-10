import React from 'react';

import { classes } from '../../util/constants';

const Play = ({ onClick, children, attributes }) => (
  <a {...attributes} className={classes.PLAY} onClick={onClick}>
    {children}
  </a>
);

Play.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  onClick: React.PropTypes.func,
};

export default Play;
