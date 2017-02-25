import React from 'react';

import { classes } from '../../util/constants';

const CurrentTime = ({ children, attributes }) => (
  <div {...attributes} className={classes.CURRENT_TIME}>
    {children}
  </div>
);

CurrentTime.defaultProps = {
  attributes: null,
};

CurrentTime.propTypes = {
  attributes: React.PropTypes.node,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
};

export default CurrentTime;
