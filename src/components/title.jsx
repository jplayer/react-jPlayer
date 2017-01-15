import React from 'react';

import { classes } from '../util/constants';

const Title = ({ title, ...attributes }) => (
  <div {...attributes} className={classes.TITLE}>
    {title}
  </div>
);

Title.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Title;
