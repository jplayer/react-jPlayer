import React from 'react';

import { classes } from '../../util/constants';

const Mute = ({ onClick, id, muted, children, attributes }) => (
  <button className={classes.MUTE} onClick={() => onClick(id, muted)} {...attributes} >
    {children}
  </button>
);

Mute.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
  muted: React.PropTypes.bool.isRequired,
};

export default Mute;
