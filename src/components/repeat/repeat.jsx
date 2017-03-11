import React from 'react';

import { classes } from '../../util/constants';

const Repeat = ({ onClick, ...attributes }) => (
  <button {...attributes} className={classes.REPEAT} onClick={onClick} />
);

Repeat.propTypes = {
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Repeat;
