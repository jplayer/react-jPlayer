import React from 'react';

import { classes } from '../../util/constants';

const FullScreen = ({ onClick, children, attributes }) => (
  <button {...attributes} className={classes.FULL_SCREEN} onClick={onClick}>
    {children}
  </button>
);

FullScreen.defaultProps = {
  attributes: {},
};

FullScreen.propTypes = {
  attributes: React.PropTypes.node,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default FullScreen;
