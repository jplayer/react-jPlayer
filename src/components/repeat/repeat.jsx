import React from 'react';

import { classes } from '../../util/constants';

const Repeat = ({ onClick, id, loop, children, attributes }) => (
  <button className={classes.REPEAT} onClick={() => onClick(id, loop)} {...attributes}>
    {children}
  </button>
);

Repeat.propTypes = {
  loop: React.PropTypes.bool.isRequired,
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  id: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Repeat;
