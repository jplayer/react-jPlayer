import React from 'react';

import { classes } from '../../util/constants';

const Mute = ({ onClick, muted, children, attributes }) => (
  <button {...attributes} className={classes.MUTE} onClick={() => onClick(muted)}>
    {children}
  </button>
);

Mute.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
  muted: React.PropTypes.bool.isRequired,
};

export default Mute;
