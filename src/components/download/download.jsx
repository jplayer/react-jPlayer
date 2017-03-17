import React from 'react';

import { classes } from '../../util/constants';

const Download = ({ free, url, children, attributes }) => (
  free ?
    <a
      {...attributes} className={classes.DOWNLOAD} href={url}
      download target="_blank" rel="noopener noreferrer"
    >
      {children}
    </a>
  : null
);

Download.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  url: React.PropTypes.string.isRequired,
  free: React.PropTypes.bool.isRequired,
};

export default Download;
