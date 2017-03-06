import React from 'react';

import { classes } from '../../util/constants';

const Play = ({ onClick, ...attributes }) =>
  <button {...attributes} className={classes.PLAY} onClick={onClick} />;

Play.propTypes = {
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Play;
