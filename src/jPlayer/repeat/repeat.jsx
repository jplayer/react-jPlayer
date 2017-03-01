import React from 'react';

import { classes } from '../../util/constants';

const Repeat = ({ onClick, children, attributes }) => (
  <button {...attributes} className={classes.REPEAT} onClick={onClick}>
    {children}
  </button>
);

Repeat.defaultProps = {
  attributes: null,
};

Repeat.propTypes = {
  attributes: React.PropTypes.node,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Repeat;
