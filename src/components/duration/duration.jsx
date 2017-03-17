import React from 'react';

import { classes } from '../../util/constants';

const Duration = ({ children, attributes }) => (
  children !== '' ?
    <div {...attributes} className={classes.DURATION}>
      {children}
    </div>
  : null
);

Duration.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.string.isRequired,
};

export default Duration;
