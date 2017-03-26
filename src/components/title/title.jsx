import React from 'react';

import { classes } from '../../util/constants';

const Title = ({ children, attributes }) => (
  children !== '' ?
    <div className={classes.TITLE} {...attributes}>
      {children}
    </div>
  : null
);

Title.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
};

export default Title;
