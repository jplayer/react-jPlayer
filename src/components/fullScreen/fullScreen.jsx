import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const FullScreen = ({ setFullScreen, id, fullScreen, children }) => (
  <button
    className={classes.FULL_SCREEN}
    onClick={() => setFullScreen(id, !fullScreen)}
  >
    {children}
  </button>
);

FullScreen.propTypes = {
  children: PropTypes.node.isRequired,
  setFullScreen: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  fullScreen: PropTypes.bool.isRequired,
};

export default FullScreen;
