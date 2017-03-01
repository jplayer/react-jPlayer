import React from 'react';

import { classes } from '../../util/constants';

const Play = ({ onClick, children, attributes }) =>
  <button {...attributes} className={classes.PLAY} onClick={onClick}>
    {children}
  </button>;

Play.defaultProps = {
  attributes: null,
};

Play.propTypes = {
  attributes: React.PropTypes.node,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Play;
