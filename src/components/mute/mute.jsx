import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Mute = ({ setMute, id, muted, children }) => (
  <button className={classes.MUTE} onClick={() => setMute(id, !muted)}>
    {children}
  </button>
);

Mute.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setMute: PropTypes.func.isRequired,
  muted: PropTypes.bool.isRequired,
};

export default Mute;
