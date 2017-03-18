import React from 'react';

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
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  fullScreen: React.PropTypes.bool.isRequired,
};

export default FullScreen;
