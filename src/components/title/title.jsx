import React from 'react';

import { classes } from '../../util/constants';

const Title = ({ ...attributes }) => (
  <div {...attributes} className={classes.TITLE} />
);

Title.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
};

export default Title;
