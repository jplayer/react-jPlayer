import React from 'react';

import { classes } from '../util/constants';

const Duration = ({ children, onClick, ...attributes }) => (
  <div {...attributes} className={classes.DURATION} onClick={onClick}>
    {children}
  </div>
);

Duration.defaultProps = {
  onClick: () => null,
};

Duration.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
};

export default Duration;
