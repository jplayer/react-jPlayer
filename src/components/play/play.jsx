import React from 'react';

import { classes } from '../../util/constants';

const Play = ({ onClick, paused, children, attributes }) => (
  <button {...attributes} className={classes.PLAY} onClick={() => onClick(paused)}>
    {children}
  </button>
);

Play.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
  paused: React.PropTypes.bool.isRequired,
};

export default Play;
