import React from 'react';

import { classes } from '../../util/constants'; 

const FullScreen = ({ onClick, children, ...attributes }) => (
  <a {...attributes} className={classes.FULL_SCREEN} onClick={onClick}>
    {children}
  </a>
);

FullScreen.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default FullScreen;
