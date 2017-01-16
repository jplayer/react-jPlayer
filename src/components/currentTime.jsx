import React from 'react';

import { classes } from '../util/constants';

const CurrentTime = ({ children, ...attributes }) => (
  <div {...attributes} className={classes.CURRENT_TIME}>
    {children}
  </div>
);

CurrentTime.defaultProps = {
  children: '0:00',
};

CurrentTime.propTypes = {
  children: React.PropTypes.node,
};

export default CurrentTime;
