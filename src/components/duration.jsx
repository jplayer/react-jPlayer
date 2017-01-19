import React from 'react';

import { classes } from '../util/constants';

const Duration = ({ children, ...attributes }) => (
  <div {...attributes} className={classes.DURATION}>
    {children}
  </div>
);

Duration.defaultProps = {
  children: '',
};

Duration.propTypes = {
  children: React.PropTypes.node,
};

export default Duration;
