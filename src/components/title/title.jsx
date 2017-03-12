import React from 'react';

import { classes } from '../../util/constants';

const Title = ({ children, artist, title, ...attributes }) => (
  <div {...attributes} className={classes.TITLE}>
    {children === null ? `${artist} - ${title}` : children}
  </div>
);

Title.defaultProps = {
  children: null,
  artist: null,
  title: null,
};

Title.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  artist: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default Title;
