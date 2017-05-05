import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const FullScreen = ({ toggleFullScreen, id, fullScreen, children, ...attributes }) => (
  <button
    className={classes.FULL_SCREEN}
    onClick={() => toggleFullScreen(id, fullScreen)}
    {...attributes}
  >
    {children}
  </button>
);

FullScreen.propTypes = {
  children: PropTypes.node.isRequired,
  toggleFullScreen: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  fullScreen: PropTypes.bool.isRequired,
};

export default FullScreen;
