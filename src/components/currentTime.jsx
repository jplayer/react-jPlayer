import React from 'react';

import { classes } from '../util/constants';

const CurrentTime = ({ children, ...attributes }) => (
  <div {...attributes} className={classes.CURRENT_TIME}>
    {children}
  </div>
);

CurrentTime.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
};

export default CurrentTime;
