import React from 'react';

import { classes } from '../../util/constants';

const FullScreen = ({ onClick, fullScreen, children, attributes }) => (
  <button
    {...attributes} className={classes.FULL_SCREEN}
    onClick={() => onClick(fullScreen)}
  >
    {children}
  </button>
);

FullScreen.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
  fullScreen: React.PropTypes.bool.isRequired,
};

export default FullScreen;
