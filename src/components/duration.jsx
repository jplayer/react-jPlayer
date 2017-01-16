import React from 'react';

import { classes } from '../util/constants';

const Duration = ({ children, onClick, ...attributes }) => (
  <div {...attributes} className={classes.DURATION} onClick={onClick}>
    {children}
  </div>
);

Duration.defaultProps = {
  onClick: () => null,
  children: '',
};

Duration.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default Duration;
