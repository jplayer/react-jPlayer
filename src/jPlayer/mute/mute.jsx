import React from 'react';

import { classes } from '../../util/constants';

const Mute = ({ onClick, ...attributes }) =>
  <button {...attributes} className={classes.MUTE} onClick={onClick} />;

Mute.propTypes = {
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
};


export default Mute;
