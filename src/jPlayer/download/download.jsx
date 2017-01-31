import React from 'react';

import { classes } from '../../util/constants';

const Download = ({ free, href, children, ...attributes }) => (
  free ?
    <a
      {...attributes} className={classes.DOWNLOAD} href={href}
      download
    >
      {children}
    </a>
  : null
);

Download.propTypes = {
  children: React.PropTypes.node.isRequired,
  href: React.PropTypes.string.isRequired,
  free: React.PropTypes.bool.isRequired,
};

export default Download;
