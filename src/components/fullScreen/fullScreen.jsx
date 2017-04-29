import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const FullScreen = ({ onClick, id, fullScreen, children, attributes }) => (
  <button
    className={classes.FULL_SCREEN}
    onClick={() => onClick(id, fullScreen)}
    {...attributes}
  >
    {children}
  </button>
);

FullScreen.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  fullScreen: PropTypes.bool.isRequired,
};

export default FullScreen;
