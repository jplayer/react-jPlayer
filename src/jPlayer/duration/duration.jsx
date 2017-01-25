import React from 'react';

import { classes } from '../../util/constants';

const Duration = ({ children, ...attributes }) => (
  <div {...attributes} className={classes.DURATION}>
    {children}
  </div>
);

Duration.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default Duration;
