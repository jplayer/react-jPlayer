import React from 'react';

import { classes } from '../../util/constants';

const Title = ({ children, ...attributes }) => (
  <div {...attributes} className={classes.TITLE}>
    {children}
  </div>
);

Title.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default Title;
