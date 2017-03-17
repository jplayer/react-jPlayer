import React from 'react';

import { classes } from '../../util/constants';

const Repeat = ({ onClick, loop, children, attributes }) => (
  <button {...attributes} className={classes.REPEAT} onClick={() => onClick(loop)}>
    {children}
  </button>
);

Repeat.propTypes = {
  loop: React.PropTypes.bool.isRequired,
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Repeat;
