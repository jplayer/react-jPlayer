import React from 'react';

import { classes } from '../../util/constants';

const Play = ({ onClick, id, paused, children, attributes }) => (
  <button className={classes.PLAY} onClick={() => onClick(id, paused)} {...attributes}>
    {children}
  </button>
);

Play.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  paused: React.PropTypes.bool.isRequired,
};

export default Play;
