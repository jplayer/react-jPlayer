import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Mute = ({ onClick, id, muted, children, attributes }) => (
  <button className={classes.MUTE} onClick={() => onClick(id, muted)} {...attributes} >
    {children}
  </button>
);

Mute.propTypes = {
  attributes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  muted: PropTypes.bool.isRequired,
};

export default Mute;
