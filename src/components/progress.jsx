import React from 'react';

import { classes } from '../util/constants';

const Progress = ({ children, ...attributes }) => (
  <div {...attributes} className={classes.PROGRESS}>
    {children}
  </div>
);

Progress.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
};

export default Progress;
