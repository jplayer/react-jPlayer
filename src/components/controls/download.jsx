import React from 'react';

import { classes } from '../../util/constants';

const Download = ({ free, src, children, ...attributes }) => (
  free ?
    <a
      {...attributes} className={classes.DOWNLOAD} href={src}
      download
    >
      {children}
    </a>
  : null
);

Download.defaultProps = {
  free: false,
};

Download.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  src: React.PropTypes.string.isRequired,
  free: React.PropTypes.bool,
};

export default Download;
