import React from 'react';

import { classes } from '../util/constants';

const Title = ({ title, attributes }) => (
  <div {...attributes} className={classes.TITLE}>
    {title}
  </div>
);

Title.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  title: React.PropTypes.string,
};

export default Title;
