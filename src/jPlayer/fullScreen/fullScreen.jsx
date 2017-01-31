import React from 'react';

import { classes } from '../../util/constants';

const FullScreen = ({ onClick, ...attributes }) =>
  <button {...attributes} className={classes.FULL_SCREEN} onClick={onClick} />;

FullScreen.propTypes = {
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default FullScreen;
