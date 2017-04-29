import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Play = ({ onClick, id, paused, children, attributes }) => (
  <button className={classes.PLAY} onClick={() => onClick(id, paused)} {...attributes}>
    {children}
  </button>
);

Play.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  paused: PropTypes.bool.isRequired,
};

export default Play;
