import React from 'react';

import { classes } from '../../util/constants';

const Mute = ({ onClick, children, attributes }) => (
  <button {...attributes} className={classes.MUTE} onClick={onClick}>
    {children}
  </button>
);

Mute.defaultProps = {
  attributes: null,
};

Mute.propTypes = {
  attributes: React.PropTypes.node,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Mute;
