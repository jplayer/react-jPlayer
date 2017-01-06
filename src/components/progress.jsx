import React from 'react';

import { classes } from '../util/constants';

const Progress = ({ children, ...attributes }) => (
  <div className={classes.PROGRESS} {...attributes}>
    {children}
  </div>
);

Progress.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
};

export default Progress;
