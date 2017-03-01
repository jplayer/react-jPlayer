import React from 'react';

import { classes } from '../../util/constants';

const Title = ({ children, attributes }) => (
  <div {...attributes} className={classes.TITLE}>
    {children}
  </div>
);

Title.defaultProps = {
  attributes: null,
};

Title.propTypes = {
  attributes: React.PropTypes.node,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
};

export default Title;
