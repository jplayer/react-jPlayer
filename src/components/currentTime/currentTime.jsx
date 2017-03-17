import React from 'react';

import { classes } from '../../util/constants';

const CurrentTime = ({ children, attributes }) => (
  <div {...attributes} className={classes.CURRENT_TIME}>
    {children}
  </div>
);

CurrentTime.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.string.isRequired,
};

export default CurrentTime;
